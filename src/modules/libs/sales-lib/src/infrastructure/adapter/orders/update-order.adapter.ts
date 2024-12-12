import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { UpdateOrderServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { OrderEntity } from '@/sales-lib/core/models/entities';
import { OrderInput } from '@/sales-lib/core/models/inputs';

@Injectable()
export class UpdateOrderAdapter implements UpdateOrderServiceOutbound {
  constructor(
    @InjectRepository(OrderDbEntity)
    private readonly orderRepository: Repository<OrderDbEntity>,
  ) {}

  async updateOrder(id: string, input: OrderInput): Promise<OrderEntity> {
    const order = await this.orderRepository.preload({
      id,
      ...input,
    });
    return this.orderRepository.save(order);
  }
}
