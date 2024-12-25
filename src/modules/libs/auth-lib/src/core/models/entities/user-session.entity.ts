import { BusinessEntity } from '@/auth-lib/core/models/entities/business.entity';

export type UserSessionEntity = {
  id: number;
  currentBusiness: BusinessEntity | null;
};
