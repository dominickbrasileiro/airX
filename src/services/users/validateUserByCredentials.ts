import { User } from '.prisma/client';
import { securityService } from '../security';
import { userService } from '.';

interface IRequest {
  email: string;
  password: string;
}

export const validateUserByCredentials = async ({
  email,
  password,
}: IRequest): Promise<User> => {
  const user = await userService.findActiveUserByEmail({ email });

  if (!user) {
    return null;
  }

  const passwordMatches = await securityService.compareHash(
    password,
    user.passwordHash,
  );

  if (!passwordMatches) {
    return null;
  }

  return user;
};
