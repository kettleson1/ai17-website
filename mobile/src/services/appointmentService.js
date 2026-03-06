import { PutCommand, QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import config from '../constants/config';
import { getAuthenticatedUserId } from './authService';
import { getDynamoDocClient } from './dynamoClient';
import { sampleLeads } from '../data/sampleLeads';

const createAppointmentId = () =>
  `appt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

export const createAppointment = async ({
  leadId,
  scheduledAt,
  notes,
  leadBusinessName,
  leadOwnerName,
}) => {
  if (config.useSampleData) {
    return true;
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return false;

  const docClient = getDynamoDocClient();
  await docClient.send(
    new PutCommand({
      TableName: config.dynamoTables.appointments,
      Item: {
        appointmentId: createAppointmentId(),
        leadId,
        createdBy: userId,
        leadBusinessName: leadBusinessName || null,
        leadOwnerName: leadOwnerName || null,
        scheduledAt,
        status: 'scheduled',
        payoutStatus: 'pending',
        notes: notes || null,
        createdAt: new Date().toISOString()
      }
    })
  );

  return true;
};

const sortByScheduledAt = (items) =>
  [...items].sort((a, b) => {
    const aTime = new Date(a.scheduledAt || a.createdAt || 0).getTime();
    const bTime = new Date(b.scheduledAt || b.createdAt || 0).getTime();
    return bTime - aTime;
  });

const mapAppointment = (item) => ({
  id: item.appointmentId,
  leadId: item.leadId,
  leadBusinessName: item.leadBusinessName || null,
  leadOwnerName: item.leadOwnerName || null,
  scheduledAt: item.scheduledAt || null,
  status: item.status || 'scheduled',
  payoutStatus: item.payoutStatus || 'pending',
  notes: item.notes || '',
  createdAt: item.createdAt || null,
});

export const getAppointments = async () => {
  if (config.useSampleData) {
    const sampleAppointments = sampleLeads
      .filter((lead) => lead.status === 'appointment-set')
      .map((lead) => ({
        id: `sample-appt-${lead.id}`,
        leadId: lead.id,
        leadBusinessName: lead.businessName,
        leadOwnerName: lead.ownerName,
        scheduledAt: lead.lastContact || new Date().toISOString(),
        status: 'scheduled',
        payoutStatus: 'pending',
        notes: '',
        createdAt: lead.lastContact || new Date().toISOString(),
      }));
    return sortByScheduledAt(sampleAppointments);
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return [];

  const docClient = getDynamoDocClient();
  const tableName = config.dynamoTables.appointments;
  const userIndex = config.dynamoIndexes.appointmentsByUser;

  try {
    const queryResult = await docClient.send(
      new QueryCommand({
        TableName: tableName,
        IndexName: userIndex,
        KeyConditionExpression: 'createdBy = :createdBy',
        ExpressionAttributeValues: {
          ':createdBy': userId,
        },
        ScanIndexForward: false,
      })
    );

    return (queryResult.Items || []).map(mapAppointment);
  } catch (error) {
    // Fallback for environments where the appointments-by-user GSI has not been created yet.
    if (error?.name !== 'ValidationException') {
      throw error;
    }
  }

  const scanResult = await docClient.send(
    new ScanCommand({
      TableName: tableName,
      FilterExpression: 'createdBy = :createdBy',
      ExpressionAttributeValues: {
        ':createdBy': userId,
      },
    })
  );

  return sortByScheduledAt((scanResult.Items || []).map(mapAppointment));
};
