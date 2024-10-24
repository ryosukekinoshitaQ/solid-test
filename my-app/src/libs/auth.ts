import { Amplify } from "aws-amplify";
//import awsconfig from "../../amplify_outputs.json";
import { signIn, getCurrentUser, signOut } from "aws-amplify/auth";

//Amplify.configure(awsconfig, { ssr: true });

export const userSignIn = async (email: string, password: string) => {
  return await signIn({ username: email, password: password });
};

export const currentUser = async () => {
  return await getCurrentUser();
};

export const userSignOut = async () => {
  return await signOut();
};
