import { Amplify } from 'aws-amplify';
import awsConfig from './awsConfig';

let configured = false;

export const configureAmplify = () => {
  if (configured) return;
  Amplify.configure(awsConfig);
  configured = true;
};
