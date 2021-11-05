import { RefreshToken, User } from '.prisma/client';
import { authService } from '.';
import { ApplicationError } from '../../errors/ApplicationError';
import { securityService } from '../security';
import { userService } from '../users';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  refreshToken: RefreshToken;
}

export const authenticateUser = async ({
  email,
  password,
}: IRequest): Promise<IResponse> => {
  const user = await userService.findActiveUserByEmail({ email });

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
