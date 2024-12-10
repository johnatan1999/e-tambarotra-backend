import { GetTotalCustomersServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class GetTotalCustomersAdapter
  implements GetTotalCustomersServiceOutbound
{
  constructor(
    @InjectRepository(CustomerDbEntity)
    private readonly customerRepository: Repository<any>,
  ) {}

  async getTotalCustomers(businessId: number): Promise<number> {
    return this.customerRepository.count({
      where: { business: { id: businessId } },
    });
  }
}
