import { RefreshToken, User } from '.prisma/client';
import { authService } from '.';
import { ApplicationError } from '../../errors/ApplicationError';
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
  const user = await userService.validateUserByCredentials({ email, password });

  if (!user) {
    throw new ApplicationError('Invalid credentials');
  }

  const refreshToken = await authService.createRefreshToken({
    userId: user.id,
  });

  return { user, refreshToken };
};
