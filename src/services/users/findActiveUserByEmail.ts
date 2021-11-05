import { User } from '.prisma/client';
import { prisma } from '../../database/prisma';

interface IRequest {
  email: string;
}

export const findActiveUserByEmail = async ({
  email,
}: IRequest): Promise<User | null> => {
  return prisma.user.findFirst({
    where: {
      email,
      active: true,
    },
  });
};
