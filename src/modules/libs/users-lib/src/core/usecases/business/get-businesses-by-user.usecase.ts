import { GetBusinessesByUserServiceInbound } from '@/users-lib/core/services/inbounds/business';
import { BusinessEntity } from '@/users-lib/core/models/entities';
import { GetBusinessesByUserServiceOutbound } from '@/users-lib/core/services/outbounds/business';

export class GetBusinessesByUserUseCase
  implements GetBusinessesByUserServiceInbound
{
  constructor(private readonly outbound: GetBusinessesByUserServiceOutbound) {}

  async getBusinessesByUser(userId: number): Promise<BusinessEntity[]> {
    return this.outbound.getBusinessesByUser(userId);
  }
}
