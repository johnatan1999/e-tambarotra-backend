import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Res,
} from '@nestjs/common';
import { GetProductByIdService } from '@/inventory-lib/application/services/products/get-product-by-id.service';

@Controller('/products')
export class GetProductByIdController {
  constructor(
    @Inject(GetProductByIdService)
    private readonly service: GetProductByIdService,
  ) {}

  @Get('/:id')
  async getProductById(@Res() res: any, @Param('id') id: number) {
    try {
      const product = await this.service.getProductById(id);
      return res.status(HttpStatus.OK).json(product);
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({ error: error });
    }
  }
}
