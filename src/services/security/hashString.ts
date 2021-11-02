import bcrypt from 'bcrypt';
import { securityConfig } from '../../config/security';

export const hashString = async (raw: string): Promise<string> => {
  return bcrypt.hash(raw, securityConfig.hashSalt);
};
