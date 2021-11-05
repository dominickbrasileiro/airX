import { UserTokenType } from '.prisma/client';
import { prisma } from '../../database/prisma';
import { securityService } from '../security';

interface IRequest {
  userId: string;
}

export const createRefreshToken = async ({
  userId,
}: IRequest): Promise<string> => {
  const generatedToken = await securityService.generateToken();

  const refreshToken = await prisma.userToken.create({
    data: {
      userId,
      type: UserTokenType.refreshToken,
      token: generatedToken,
    },
  });

  return refreshToken.token;
};
