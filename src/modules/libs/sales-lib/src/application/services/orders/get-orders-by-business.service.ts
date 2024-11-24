import { Inject, Injectable } from '@nestjs/common';
import {
  GET_ORDERS_BY_BUSINESS_SERVICE_INBOUND,
  GetOrdersByBusinessServiceInbound,
} from '@/sales-lib/core/services/inbounds/orders';
import { GetOrdersByBusinessOutput } from '@/sales-lib/application/models/output';

@Injectable()
export class GetOrdersByBusinessService {
  constructor(
    @Inject(GET_ORDERS_BY_BUSINESS_SERVICE_INBOUND)
    private readonly useCase: GetOrdersByBusinessServiceInbound,
  ) {}

  async getOrdersByBusiness(
    businessId: string,
  ): Promise<GetOrdersByBusinessOutput> {
    return this.useCase.getOrdersByBusiness(businessId);
  }
}
