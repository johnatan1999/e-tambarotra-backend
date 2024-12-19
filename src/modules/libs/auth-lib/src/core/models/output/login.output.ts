import { BusinessEntity } from '@/auth-lib/core/models/entities';

export type LoginOutput = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  username: string;
  businesses: BusinessEntity[];
  token: string;
};
