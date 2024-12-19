import { BusinessEntity } from '@/auth-lib/core/models/entities';

export type AccountEntity = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  businesses: BusinessEntity[];
};
