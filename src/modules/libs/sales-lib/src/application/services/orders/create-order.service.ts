import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ORDER_SERVICE_INBOUND,
  CreateOrderServiceInbound,
} from '@/sales-lib/core/services/inbounds/orders';
import { OrderInput } from '@/sales-lib/core/models/inputs';
import { OrderEntity } from '@/sales-lib/core/models/entities';

@Injectable()
export class CreateOrderService {
  constructor(
    @Inject(CREATE_ORDER_SERVICE_INBOUND)
    private readonly useCase: CreateOrderServiceInbound,
  ) {}

  createOrder(orderDetails: OrderInput): Promise<OrderEntity> {
    return this.useCase.createOrder(orderDetails);
  }
}
