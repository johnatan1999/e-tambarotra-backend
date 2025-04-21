import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Query,
  Res,
} from '@nestjs/common';
import { GetLatestProductsService } from '@/dashboard-lib/application/services/get-latest-products.service';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';

@Controller('dashboard')
export class GetLatestProductsController {
  constructor(
    @Inject(GetLatestProductsService)
    private readonly service: GetLatestProductsService,
  ) {}

  @Get(':businessId/latest-products')
  async getLatestProducts(
    @Res() res: any,
    @Param('businessId') businessId: number,
    @Query('limit') limit?: number,
  ): Promise<ProductEntity[]> {
    const result = await this.service.getLatestProducts(businessId, limit);
    return res.status(HttpStatus.OK).json(result);
  }
}
