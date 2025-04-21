import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UpdateProductService } from '@/inventory-lib/application/services/products';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';

@Controller('products')
export class UpdateProductController {
  constructor(
    @Inject(UpdateProductService)
    private readonly service: UpdateProductService,
  ) {}

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productDetails: ProductInput,
  ) {
    return this.service.updateProduct(id, productDetails);
  }
}
