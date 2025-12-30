import { signIn, signInWithRedirect, getCurrentUser, signOut } from 'aws-amplify/auth';

export const loginWithEmail = async (email, password) => {
  return signIn({
    username: email,
    password,
    options: {
      authFlowType: "USER_PASSWORD_AUTH"
    }
  });
};

export const loginWithSSO = async () => {
  return signInWithRedirect({ provider: "COGNITO" });
};

export const getAuthenticatedUserId = async () => {
  try {
    const user = await getCurrentUser();
    return user?.username ?? null;
  } catch (error) {
    return null;
  }
};

export const logout = async () => {
  return signOut();
};
