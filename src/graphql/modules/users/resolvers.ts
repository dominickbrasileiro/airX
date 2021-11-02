import { IBaseResolver } from '../../../contracts/IBaseResolver';
import { IMutationArgsData } from '../../../contracts/IMutationArgsData';
import { userService } from '../../../services/users';
import { IRegisterUserInput } from './inputs';

const userResolvers: IBaseResolver = {
  Query: {},
  Mutation: {
    registerUser: (_, args: IMutationArgsData<IRegisterUserInput>) => {
      const { email, password, firstName, lastName } = args.data;

      return userService.registerUser({
        email,
        password,
        firstName,
        lastName,
      });
    },
  },
};

export default userResolvers;
