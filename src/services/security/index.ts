import { compareHash } from './compareHash';
import { hashString } from './hashString';
import { generateToken } from './generateToken';

export const securityService = {
  hashString,
  compareHash,
  generateToken,
};
