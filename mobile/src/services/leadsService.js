import { GetCommand, QueryCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import config from '../constants/config';
import { sampleLeads } from '../data/sampleLeads';
import { getAuthenticatedUserId } from './authService';
import { getDynamoDocClient } from './dynamoClient';

export const getLeads = async () => {
  if (config.useSampleData) {
    return sampleLeads;
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return [];

  const docClient = getDynamoDocClient();
  const result = await docClient.send(
    new QueryCommand({
      TableName: config.dynamoTables.leads,
      IndexName: 'assignedTo-index',
      KeyConditionExpression: 'assignedTo = :assignedTo',
      ExpressionAttributeValues: {
        ':assignedTo': userId
      }
    })
  );

  return (result.Items || []).map((item) => ({
    id: item.leadId,
    ...item
  }));
};

export const getLeadById = async (leadId) => {
  if (config.useSampleData) {
    return sampleLeads.find((lead) => lead.id === leadId) || null;
  }

  const docClient = getDynamoDocClient();
  const result = await docClient.send(
    new GetCommand({
      TableName: config.dynamoTables.leads,
      Key: { leadId }
    })
  );

  if (!result.Item) return null;
  return { id: result.Item.leadId, ...result.Item };
};

export const updateLeadStatus = async (leadId, status) => {
  if (config.useSampleData) {
    return true;
  }

  const docClient = getDynamoDocClient();
  await docClient.send(
    new UpdateCommand({
      TableName: config.dynamoTables.leads,
      Key: { leadId },
      UpdateExpression: 'SET #status = :status',
      ExpressionAttributeNames: {
        '#status': 'status'
      },
      ExpressionAttributeValues: {
        ':status': status
      }
    })
  );
  return true;
};
