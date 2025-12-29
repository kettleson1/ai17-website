const awsConfig = {
  Auth: {
    region: "us-east-2",
    userPoolId: "us-east-2_i5aZjCPUZ",
    userPoolWebClientId: "49nc8hor19c1lb0ppog52hql5i",
    identityPoolId: "us-east-2:ee691469-7a28-423a-ad8b-42c300566ec2",
    oauth: {
      domain: "us-east-2i5azjcpuz.auth.us-east-2.amazoncognito.com",
      scope: ["openid", "email", "profile"],
      redirectSignIn: "https://auth.expo.io/@kettleson1/ai17-outreach-hq",
      redirectSignOut: "https://auth.expo.io/@kettleson1/ai17-outreach-hq",
      responseType: "code",
    },
  },
};

export default awsConfig;
