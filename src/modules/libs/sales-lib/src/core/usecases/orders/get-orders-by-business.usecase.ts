import { GetOrdersByBusinessServiceInbound } from '@/sales-lib/core/services/inbounds/orders';
import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';
import { GetOrdersByBusinessServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';

export class GetOrdersByBusinessUseCase
  implements GetOrdersByBusinessServiceInbound
{
  constructor(private readonly outbound: GetOrdersByBusinessServiceOutbound) {}

  getOrdersByBusiness(businessId: string): Promise<OrderEntity[]> {
    return this.outbound.getOrdersByBusiness(parseInt(businessId));
  }
}
