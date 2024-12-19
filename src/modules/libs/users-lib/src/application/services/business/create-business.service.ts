import { BusinessEntity } from '@/users-lib/core/models/entities';
import { BusinessInput } from '@/users-lib/core/models/inputs';
import {
  CREATE_BUSINESS_SERVICE_INBOUND,
  CreateBusinessServiceInbound,
} from '@/users-lib/core/services/inbounds/business';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateBusinessService {
  constructor(
    @Inject(CREATE_BUSINESS_SERVICE_INBOUND)
    private readonly useCase: CreateBusinessServiceInbound,
  ) {}

  async createBusiness(businessInput: BusinessInput): Promise<BusinessEntity> {
    return this.useCase.createBusiness(businessInput);
  }
}
