import { BusinessEntity } from '@/users-lib/core/models/entities';
import { BusinessInput } from '@/users-lib/core/models/inputs';
import { CreateBusinessServiceInbound } from '@/users-lib/core/services/inbounds/business';
import { CreateBusinessServiceOutbound } from '@/users-lib/core/services/outbounds/business';

export class CreateBusinessUseCase implements CreateBusinessServiceInbound {
  constructor(private readonly outbound: CreateBusinessServiceOutbound) {}

  async createBusiness(input: BusinessInput): Promise<BusinessEntity> {
    return this.outbound.createBusiness(input);
  }
}
