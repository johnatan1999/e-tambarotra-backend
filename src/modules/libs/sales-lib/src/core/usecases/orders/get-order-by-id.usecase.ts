import { GetOrderByIdServiceInbound } from '@/sales-lib/core/services/inbounds/orders';
import { GetOrderByIdServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { OrderEntity } from '@/sales-lib/core/models/entities';

export class GetOrderByIdUseCase implements GetOrderByIdServiceInbound {
  constructor(private readonly outbound: GetOrderByIdServiceOutbound) {}

  async getOrderById(id: string): Promise<OrderEntity> {
    return this.outbound.getOrderById(id);
  }
}
