import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { fetchAuthSession } from 'aws-amplify/auth';
import awsConfig from './awsConfig';

let cachedDocClient = null;
const cognitoConfig = awsConfig.Auth?.Cognito || {};

const getRegion = () => {
  if (cognitoConfig.region) return cognitoConfig.region;
  if (cognitoConfig.userPoolId?.includes('_')) {
    return cognitoConfig.userPoolId.split('_')[0];
  }
  if (process.env.EXPO_PUBLIC_AWS_REGION) return process.env.EXPO_PUBLIC_AWS_REGION;
  throw new Error('Missing AWS region. Set EXPO_PUBLIC_AWS_REGION or Cognito region.');
};

const getLogins = async () => {
  const session = await fetchAuthSession();
  const idToken = session.tokens?.idToken?.toString();
  if (!idToken) return {};

  const region = getRegion();
  const userPoolId = cognitoConfig.userPoolId;
  if (!userPoolId) {
    throw new Error('Missing Cognito userPoolId for identity pool federation.');
  }

  const providerKey = `cognito-idp.${region}.amazonaws.com/${userPoolId}`;
  return { [providerKey]: idToken };
};

export const getDynamoDocClient = () => {
  if (cachedDocClient) return cachedDocClient;

  const region = getRegion();
  const identityPoolId = cognitoConfig.identityPoolId;
  if (!identityPoolId) {
    throw new Error('Missing Cognito Identity Pool ID for DynamoDB access.');
  }

  const credentials = fromCognitoIdentityPool({
    identityPoolId,
    clientConfig: { region },
    logins: getLogins
  });

  const client = new DynamoDBClient({ region, credentials });
  cachedDocClient = DynamoDBDocumentClient.from(client, {
    marshallOptions: { removeUndefinedValues: true }
  });

  return cachedDocClient;
};
