const awsConfig = {
  Auth: {
    region: "YOUR_AWS_REGION",
    userPoolId: "YOUR_USER_POOL_ID",
    userPoolWebClientId: "YOUR_USER_POOL_APP_CLIENT_ID",
    oauth: {
      domain: "YOUR_COGNITO_DOMAIN",
      scope: ["email", "openid", "profile"],
      redirectSignIn: "ai17-outreach://auth",
      redirectSignOut: "ai17-outreach://signout",
      responseType: "code"
    }
  }
};

export default awsConfig;
