import { BusinessEntity } from '@/users-lib/core/models/entities';
import {
  GET_BUSINESSES_BY_USER_SERVICE_INBOUND,
  GetBusinessesByUserServiceInbound,
} from '@/users-lib/core/services/inbounds/business';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetBusinessesByUserService {
  constructor(
    @Inject(GET_BUSINESSES_BY_USER_SERVICE_INBOUND)
    private readonly getBusinessesByUserServiceInbound: GetBusinessesByUserServiceInbound,
  ) {}

  getBusinessesByUser(userId: number): Promise<BusinessEntity[]> {
    return this.getBusinessesByUserServiceInbound.getBusinessesByUser(userId);
  }
}
