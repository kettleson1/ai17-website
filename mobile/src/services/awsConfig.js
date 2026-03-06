const userPoolId =
  process.env.EXPO_PUBLIC_COGNITO_USER_POOL_ID || "us-east-2_i5aZjCPUZ";
const derivedRegionFromPool = userPoolId.includes('_')
  ? userPoolId.split('_')[0]
  : undefined;
const region = process.env.EXPO_PUBLIC_AWS_REGION || derivedRegionFromPool || 'us-east-2';

const awsConfig = {
  Auth: {
    Cognito: {
      region,
      userPoolId,
      userPoolClientId:
        process.env.EXPO_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "49nc8hor19c1lb0ppog52hql5i",
      identityPoolId:
        process.env.EXPO_PUBLIC_COGNITO_IDENTITY_POOL_ID ||
        "us-east-2:ee691469-7a28-423a-ad8b-42c300566ec2",
      loginWith: {
        email: true,
        oauth: {
          domain:
            process.env.EXPO_PUBLIC_COGNITO_DOMAIN ||
            "us-east-2i5azjcpuz.auth.us-east-2.amazoncognito.com",
          scope: ["openid", "email", "profile"],
          redirectSignIn:
            process.env.EXPO_PUBLIC_COGNITO_REDIRECT_SIGN_IN ||
            "https://auth.expo.io/@kettleson1/ai17-outreach-hq",
          redirectSignOut:
            process.env.EXPO_PUBLIC_COGNITO_REDIRECT_SIGN_OUT ||
            "https://auth.expo.io/@kettleson1/ai17-outreach-hq",
          responseType: "code"
        }
      }
    }
  }
};

export default awsConfig;
