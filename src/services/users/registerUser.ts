interface IRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const registerUser = (data: IRequest): any => {
  return data;
};
