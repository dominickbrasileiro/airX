import crypto from 'crypto';

export const generateToken = async (): Promise<string> => {
  return crypto.randomUUID();
};
