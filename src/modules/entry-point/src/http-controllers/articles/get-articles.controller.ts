import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

@Controller('/articles')
export class GetArticlesController {
  @Get()
  getArticles(@Res() res: any) {
    return res.status(HttpStatus.OK).json([]);
  }
}
