import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { GetBestSellingProductsService } from '@/dashboard-lib/application/services';
import { BestSellerEntity } from '@/dashboard-lib/core/models/entities';

@Controller('dashboard')
export class GetBestSellingProductsController {
  constructor(
    @Inject(GetBestSellingProductsService)
    private readonly service: GetBestSellingProductsService,
  ) {}

  @Get(':businessId/best-selling-products')
  async getBestSellingProducts(
    @Param('businessId') businessId: string,
    @Query('limit') limit?: number,
  ): Promise<BestSellerEntity[]> {
    return this.service.getBestSellingProducts(businessId, limit);
  }
}
