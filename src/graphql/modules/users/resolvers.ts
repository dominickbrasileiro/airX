import { IBaseResolver } from '../../../contracts/IBaseResolver';
import { IMutationArgsData } from '../../../contracts/IMutationArgsData';
import { registerUser } from '../../../services/users/registerUser';
import { IRegisterUserInput } from './inputs';

const userResolvers: IBaseResolver = {
  Query: {},
  Mutation: {
    registerUser: (_, args: IMutationArgsData<IRegisterUserInput>) => {
      const { email, password, firstName, lastName } = args.data;

      return registerUser({
        email,
        password,
        firstName,
        lastName,
      });
    },
  },
};

export default userResolvers;
