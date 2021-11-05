import { findActiveUserByEmail } from './findActiveUserByEmail';
import { registerUser } from './registerUser';
import { validateUserByCredentials } from './validateUserByCredentials';

export const userService = {
  findActiveUserByEmail,
  registerUser,
  validateUserByCredentials,
};
