import { RefreshToken } from '.prisma/client';
import { prisma } from '../../database/prisma';
import { dateUtils } from '../../utils/date';
import { securityService } from '../security';

interface IRequest {
  userId: string;
}

export const createRefreshToken = async ({
  userId,
}: IRequest): Promise<RefreshToken> => {
  const token = await securityService.generateToken();

  const expiration = await dateUtils.addDays(360);

  const refreshToken = await prisma.refreshToken.create({
    data: {
      userId,
      token,
      expiration,
    },
  });

  return refreshToken;
};
