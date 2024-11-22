import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Res,
} from '@nestjs/common';
import { GetProductService } from '@/inventory-lib/application/services/products/get-product.service';

@Controller('/business')
export class GetBusinessProductsController {
  constructor(
    @Inject(GetProductService)
    private readonly service: GetProductService,
  ) {}

  @Get('/:businessId/products')
  async getProducts(@Res() res: any, @Param('businessId') businessId: number) {
    const articles = await this.service.getProductsByBusiness(businessId);
    return res.status(HttpStatus.OK).json(articles);
  }
}
