import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateArticleService } from '@/inventory-lib/application/services/articles';
import { ArticleInput } from '@/inventory-lib/core/model/inputs';

@Controller('/articles')
export class CreateArticleController {
  constructor(
    @Inject(CreateArticleService)
    private readonly service: CreateArticleService,
  ) {}

  @Post()
  createArticle(@Body() article: ArticleInput) {
    return this.service.createArticle(article);
  }
}
