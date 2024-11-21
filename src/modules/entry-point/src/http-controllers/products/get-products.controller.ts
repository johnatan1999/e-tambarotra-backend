import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

@Controller('/products')
export class GetProductsController {
  @Get()
  getArticles(@Res() res: any) {
    return res.status(HttpStatus.OK).json([]);
  }
}
