import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { GetLatestOrdersService } from '@/dashboard-lib/application/services/get-latest-orders.service';
import { OrderEntity } from '@/sales-lib/core/models/entities';

@Controller('dashboard')
export class GetLatestOrdersController {
  constructor(
    @Inject(GetLatestOrdersService)
    private readonly service: GetLatestOrdersService,
  ) {}

  @Get(':businessId/latest-orders')
  async getLatestOrders(
    @Param('businessId') businessId: number,
    @Query('limit') limit?: number,
  ): Promise<OrderEntity[]> {
    return this.service.getLatestOrders(businessId, limit);
  }
}
