import { UpdateOrderServiceInbound } from '@/sales-lib/core/services/inbounds/orders';
import { UpdateOrderServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { OrderEntity } from '@/sales-lib/core/models/entities';
import { OrderInput } from '@/sales-lib/core/models/inputs';

export class UpdateOrderUseCase implements UpdateOrderServiceInbound {
  constructor(private readonly outbound: UpdateOrderServiceOutbound) {}

  updateOrder(orderId: string, orderDetails: OrderInput): Promise<OrderEntity> {
    return this.outbound.updateOrder(orderId, orderDetails);
  }
}
