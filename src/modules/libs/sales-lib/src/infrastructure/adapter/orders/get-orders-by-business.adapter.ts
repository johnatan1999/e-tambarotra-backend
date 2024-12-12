import { Injectable } from '@nestjs/common';
import { GetOrdersByBusinessServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class GetOrdersByBusinessAdapter
  implements GetOrdersByBusinessServiceOutbound
{
  constructor(
    @InjectRepository(OrderDbEntity)
    private readonly repository: Repository<OrderDbEntity>,
  ) {}

  async getOrdersByBusiness(businessId: number): Promise<OrderDbEntity[]> {
    return this.repository.find({
      where: { business: { id: businessId } },
      relations: ['items', 'customer'],
      select: {
        id: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        customer: {
          id: true,
          name: true,
        },
      },
      order: { createdAt: 'DESC' },
    });
  }
}
