import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ARTICLE_SERVICE_INBOUND,
  CreateArticleServiceInbound,
} from '@/inventory-lib/core/services/inbound/article';
import { ArticleInput } from '@/inventory-lib/core/model/inputs';
import { CreateArticleOutput } from '@/inventory-lib/application/models/output/CreateArticleOutput';

@Injectable()
export class CreateArticleService {
  constructor(
    @Inject(CREATE_ARTICLE_SERVICE_INBOUND)
    private readonly useCase: CreateArticleServiceInbound,
  ) {}

  /**
   * Create a new article in the system.
   *
   * @param article The new article information.
   * @returns The new article.
   */
  createArticle(article: ArticleInput): Promise<CreateArticleOutput> {
    return this.useCase.createArticle(article);
  }
}
