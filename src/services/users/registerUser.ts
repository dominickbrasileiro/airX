import { User } from '.prisma/client';
import { prisma } from '../../database/prisma';

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
  const user = await prisma.user.create({
    data: {
      email,
      // TODO: hash password before insert
      passwordHash: password,
      firstName,
      lastName,
    },
  });

  return user;
};
