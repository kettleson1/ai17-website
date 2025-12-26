import { PutCommand } from '@aws-sdk/lib-dynamodb';
import config from '../constants/config';
import { getAuthenticatedUserId } from './authService';
import { getDynamoDocClient } from './dynamoClient';

const createCallLogId = () =>
  `call_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

export const logCall = async ({ leadId, outcome, notes, followUp }) => {
  if (config.useSampleData) {
    return true;
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return false;

  const docClient = getDynamoDocClient();
  await docClient.send(
    new PutCommand({
      TableName: config.dynamoTables.callLogs,
      Item: {
        callLogId: createCallLogId(),
        leadId,
        outcome,
        notes: notes || null,
        followUp: followUp || null,
        createdBy: userId,
        timestamp: new Date().toISOString()
      }
    })
  );

  return true;
};
