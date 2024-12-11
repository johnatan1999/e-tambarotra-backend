import { OrderEntity } from '@/sales-lib/core/models/entities';
import {
  GET_LATEST_ORDERS_SERVICE_INBOUND,
  GetLatestOrdersServiceInbound,
} from '@/dashboard-lib/core/services/inbounds';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetLatestOrdersService {
  constructor(
    @Inject(GET_LATEST_ORDERS_SERVICE_INBOUND)
    private readonly getLatestOrdersUseCase: GetLatestOrdersServiceInbound,
  ) {}

  async getLatestOrders(
    businessId: number,
    limit?: number,
  ): Promise<OrderEntity[]> {
    return this.getLatestOrdersUseCase.getLatestOrders(businessId, limit);
  }
}
