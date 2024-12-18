export class UserEntity {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  username: string;
}

export type UserTokenData = Omit<UserEntity, 'password' | 'username'> & {
  businesses: number[];
};
