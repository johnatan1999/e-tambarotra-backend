import { CreateCustomerServiceInbound } from '@/sales-lib/core/services/inbounds/customers';
import { CreateCustomerServiceOutbound } from '@/sales-lib/core/services/outbounds/customers';
import { CustomerInput } from '@/sales-lib/core/models/inputs';
import { CustomerEntity } from '@/sales-lib/core/models/entities';

export class CreateCustomerUseCase implements CreateCustomerServiceInbound {
  constructor(private readonly outbound: CreateCustomerServiceOutbound) {}

  async createCustomer(
    customerDetails: CustomerInput,
  ): Promise<CustomerEntity> {
    return this.outbound.createCustomer(customerDetails);
  }
}
