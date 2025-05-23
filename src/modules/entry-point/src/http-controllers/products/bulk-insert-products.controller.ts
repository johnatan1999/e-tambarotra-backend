import { BulkInsertProductsService } from '@/inventory-lib/application/services/products';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';

@Controller('products/bulk')
export class BulkInsertProductsController {
  constructor(
    @Inject(BulkInsertProductsService)
    private readonly service: BulkInsertProductsService,
  ) {}

  @Post()
  async bulkInsertProducts(@Body('products') products: ProductInput[]) {
    return this.service.insertProducts(products);
  }
}
