export interface IBaseResolver {
  Query: {
    [key: string]: (...args: any[]) => any;
  };
  Mutation: {
    [key: string]: (...args: any[]) => any;
  };
}
