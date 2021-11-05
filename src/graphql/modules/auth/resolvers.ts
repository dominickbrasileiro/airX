import { IBaseResolver } from '../../../contracts/IBaseResolver';
import { IMutationArgsData } from '../../../contracts/IMutationArgsData';
import { authService } from '../../../services/auth';
import { IAuthenticateUserInput } from './inputs';

const authResolvers: IBaseResolver = {
  Query: {},
  Mutation: {
    authenticateUser: (_, args: IMutationArgsData<IAuthenticateUserInput>) => {
      const { email, password } = args.data;

      return authService.authenticateUser({
        email,
        password,
      });
    },
  },
};

export default authResolvers;
