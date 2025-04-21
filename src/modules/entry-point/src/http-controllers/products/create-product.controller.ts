import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateProductService } from 'modules/libs/inventory-lib/src/application/services/products';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';

@Controller('/products')
export class CreateProductController {
  constructor(
    @Inject(CreateProductService)
    private readonly service: CreateProductService,
  ) {}

  @Post()
  createProduct(@Body() article: ProductInput) {
    return this.service.createProduct(article);
  }
}
