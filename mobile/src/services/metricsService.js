import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import config from '../constants/config';
import { sampleLeads } from '../data/sampleLeads';
import { getAuthenticatedUserId } from './authService';
import { getDynamoDocClient } from './dynamoClient';

const emptySnapshot = {
  notContacted: 0,
  activeConversations: 0,
  appointments: 0,
  lastLoggedCall: '--'
};

const formatDateTime = (isoString) => {
  if (!isoString) return '--';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '--';
  return date.toLocaleString();
};

export const getPerformanceSnapshot = async () => {
  if (config.useSampleData) {
    const totals = sampleLeads.reduce(
      (acc, lead) => {
        const status = lead.status || 'not-contacted';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      },
      { 'not-contacted': 0, 'in-progress': 0, 'appointment-set': 0 }
    );

    return {
      notContacted: totals['not-contacted'],
      activeConversations: totals['in-progress'],
      appointments: totals['appointment-set'],
      lastLoggedCall: formatDateTime(sampleLeads[1]?.lastContact)
    };
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return emptySnapshot;

  const docClient = getDynamoDocClient();
  const leadsResult = await docClient.send(
    new QueryCommand({
      TableName: config.dynamoTables.leads,
      IndexName: 'assignedTo-index',
      KeyConditionExpression: 'assignedTo = :assignedTo',
      ExpressionAttributeValues: {
        ':assignedTo': userId
      }
    })
  );

  const totals = { 'not-contacted': 0, 'in-progress': 0, 'appointment-set': 0 };
  (leadsResult.Items || []).forEach((data) => {
    const status = data.status || 'not-contacted';
    totals[status] = (totals[status] || 0) + 1;
  });

  const callsResult = await docClient.send(
    new QueryCommand({
      TableName: config.dynamoTables.callLogs,
      IndexName: 'createdBy-timestamp-index',
      KeyConditionExpression: 'createdBy = :createdBy',
      ExpressionAttributeValues: {
        ':createdBy': userId
      },
      ScanIndexForward: false,
      Limit: 1
    })
  );
  const lastCall = callsResult.Items?.[0]?.timestamp || null;

  return {
    notContacted: totals['not-contacted'],
    activeConversations: totals['in-progress'],
    appointments: totals['appointment-set'],
    lastLoggedCall: formatDateTime(lastCall)
  };
};
