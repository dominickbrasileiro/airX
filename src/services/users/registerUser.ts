import { User } from '.prisma/client';
import { prisma } from '../../database/prisma';
import { securityService } from '../security';

interface IRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const registerUser = async ({
  email,
  password,
  firstName,
  lastName,
}: IRequest): Promise<User> => {
  const passwordHash = await securityService.hashString(password);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      firstName,
      lastName,
    },
  });

  return user;
};
