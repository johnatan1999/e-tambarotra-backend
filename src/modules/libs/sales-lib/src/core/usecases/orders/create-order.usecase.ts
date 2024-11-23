import { CreateOrderServiceInbound } from '@/sales-lib/core/services/inbounds/orders';
import { CreateOrderServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { OrderInput } from '@/sales-lib/core/models/inputs/order.input';
import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';

export class CreateOrderUsecase implements CreateOrderServiceInbound {
  constructor(private readonly outbound: CreateOrderServiceOutbound) {}

  async createOrder(orderDetails: OrderInput): Promise<OrderEntity> {
    return this.outbound.createOrder(orderDetails);
  }
}
