export class UserEntity {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
}

export type UserTokenData = Omit<UserEntity, 'password'> & {
  businesses: number[];
};
