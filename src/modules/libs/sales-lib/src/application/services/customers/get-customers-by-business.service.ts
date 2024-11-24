import {
  GET_CUSTOMERS_BY_BUSINESS_SERVICE_INBOUND,
  GetCustomersByBusinessServiceInbound,
} from '@/sales-lib/core/services/inbounds/customers';
import { Inject, Injectable } from '@nestjs/common';
import { GetCustomersByBusinessOutput } from '@/sales-lib/application/models/output';

@Injectable()
export class GetCustomersByBusinessService {
  constructor(
    @Inject(GET_CUSTOMERS_BY_BUSINESS_SERVICE_INBOUND)
    private readonly useCase: GetCustomersByBusinessServiceInbound,
  ) {}

  async getCustomersByBusiness(
    businessId: string,
  ): Promise<GetCustomersByBusinessOutput> {
    return this.useCase.getCustomersByBusiness(businessId);
  }
}
