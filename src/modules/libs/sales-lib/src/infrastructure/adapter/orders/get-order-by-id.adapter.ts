import { Injectable } from '@nestjs/common';
import { GetOrderByIdServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDbEntity } from '@/infrastructure-lib/database/entities';
import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';

@Injectable()
export class GetOrderByIdAdapter implements GetOrderByIdServiceOutbound {
  constructor(
    @InjectRepository(OrderDbEntity)
    private readonly repository: Repository<OrderDbEntity>,
  ) {}

  async getOrderById(id: string): Promise<OrderEntity> {
    return this.repository.findOne({
      where: { id },
      relations: ['items', 'customer'],
      select: {
        id: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        customer: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    });
  }
}
