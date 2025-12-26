import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { fetchAuthSession } from 'aws-amplify/auth';
import awsConfig from './awsConfig';

let cachedDocClient = null;

const getLogins = async () => {
  const session = await fetchAuthSession();
  const idToken = session.tokens?.idToken?.toString();
  if (!idToken) return {};

  const { region, userPoolId } = awsConfig.Auth;
  const providerKey = `cognito-idp.${region}.amazonaws.com/${userPoolId}`;
  return { [providerKey]: idToken };
};

export const getDynamoDocClient = () => {
  if (cachedDocClient) return cachedDocClient;

  const { region, identityPoolId } = awsConfig.Auth;
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
