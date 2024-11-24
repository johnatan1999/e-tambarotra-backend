import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_CUSTOMER_SERVICE_INBOUND,
  CreateCustomerServiceInbound,
} from '@/sales-lib/core/services/inbounds/customers';
import { CustomerInput } from '@/sales-lib/core/models/inputs';
import { CreateCustomerOutput } from '@/sales-lib/application/models/output';

@Injectable()
export class CreateCustomerService {
  constructor(
    @Inject(CREATE_CUSTOMER_SERVICE_INBOUND)
    private readonly useCase: CreateCustomerServiceInbound,
  ) {}

  async createCustomer(
    customerDetails: CustomerInput,
  ): Promise<CreateCustomerOutput> {
    return this.useCase.createCustomer(customerDetails);
  }
}
