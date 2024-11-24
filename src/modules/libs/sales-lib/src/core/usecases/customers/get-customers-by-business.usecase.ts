import { GetCustomersByBusinessServiceInbound } from '@/sales-lib/core/services/inbounds/customers';
import { CustomerEntity } from '@/sales-lib/core/models/entities';
import { GetCustomersByBusinessServiceOutbound } from '@/sales-lib/core/services/outbounds/customers';

export class GetCustomersByBusinessUseCase
  implements GetCustomersByBusinessServiceInbound
{
  constructor(
    private readonly outbound: GetCustomersByBusinessServiceOutbound,
  ) {}

  async getCustomersByBusiness(businessId: string): Promise<CustomerEntity[]> {
    return this.outbound.getCustomersByBusiness(parseInt(businessId));
  }
}
