import { Inject, Injectable } from '@nestjs/common';
import {
  GET_ORDER_BY_ID_SERVICE_INBOUND,
  GetOrderByIdServiceInbound,
} from '@/sales-lib/core/services/inbounds/orders';
import { OrderEntity } from '@/sales-lib/core/models/entities';

@Injectable()
export class GetOrderByIdService {
  constructor(
    @Inject(GET_ORDER_BY_ID_SERVICE_INBOUND)
    private readonly getOrderByIdUseCase: GetOrderByIdServiceInbound,
  ) {}

  /**
   * Service to get an order by ID.
   *
   * @class GetOrderByIdService
   */
  async getOrderById(id: string): Promise<OrderEntity> {
    return this.getOrderByIdUseCase.getOrderById(id);
  }
}
