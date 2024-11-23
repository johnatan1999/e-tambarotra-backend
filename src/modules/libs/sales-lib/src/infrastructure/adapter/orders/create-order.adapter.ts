import { Injectable } from '@nestjs/common';
import { OrderInput } from '@/sales-lib/core/models/inputs/order.input';
import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { OrderDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class CreateOrderAdapter implements CreateOrderServiceOutbound {
  constructor(
    @InjectRepository(OrderDbEntity)
    private readonly repository: Repository<OrderDbEntity>,
  ) {}

  async createOrder(orderDetails: OrderInput): Promise<OrderEntity> {
    const entity = this.repository.create({
      ...orderDetails,
    });
    return this.repository.save(entity);
  }
}
