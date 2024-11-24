import { Injectable } from '@nestjs/common';
import { GetCustomersByBusinessServiceOutbound } from '@/sales-lib/core/services/outbounds/customers';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDbEntity } from '@/infrastructure-lib/database/entities';
import { CustomerEntity } from '@/sales-lib/core/models/entities';

@Injectable()
export class GetCustomersByBusinessAdapter
  implements GetCustomersByBusinessServiceOutbound
{
  constructor(
    @InjectRepository(CustomerDbEntity)
    private readonly repository: Repository<CustomerDbEntity>,
  ) {}

  async getCustomersByBusiness(businessId: number): Promise<CustomerEntity[]> {
    return this.repository.find({
      where: {
        business: { id: businessId },
      },
    });
  }
}
