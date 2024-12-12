import {
  UPDATE_ORDER_SERVICE_INBOUND,
  UpdateOrderServiceInbound,
} from '@/sales-lib/core/services/inbounds/orders';
import { OrderEntity } from '@/sales-lib/core/models/entities';
import { OrderInput } from '@/sales-lib/core/models/inputs';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateOrderService {
  constructor(
    @Inject(UPDATE_ORDER_SERVICE_INBOUND)
    private readonly updateOrderUseCase: UpdateOrderServiceInbound,
  ) {}

  async updateOrder(orderId: string, input: OrderInput): Promise<OrderEntity> {
    return this.updateOrderUseCase.updateOrder(orderId, input);
  }
}
