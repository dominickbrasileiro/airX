import { User } from '.prisma/client';
import { authService } from '.';
import { prisma } from '../../database/prisma';
import { ApplicationError } from '../../errors/ApplicationError';
import { securityService } from '../security';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  refreshToken: string;
}

export const authenticateUser = async ({
  email,
  password,
}: IRequest): Promise<IResponse> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new ApplicationError('Invalid credentials');
  }

  const passwordMatches = await securityService.compareHash(
    password,
    user.passwordHash,
  );

  if (!passwordMatches) {
    throw new ApplicationError('Invalid credentials');
  }

  const refreshToken = await authService.createRefreshToken({
    userId: user.id,
  });

  return { user, refreshToken };
};
