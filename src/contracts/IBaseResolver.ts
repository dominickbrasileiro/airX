export interface IBaseResolver {
  Query: {
    [key: string]: () => unknown;
  };
  Mutation: {
    [key: string]: () => unknown;
  };
}
