import { CreateArticleServiceInbound } from '@/inventory-lib/core/services/inbound/article';
import { ArticleInput } from '@/inventory-lib/core/model/inputs';
import { ArticleEntity } from '@/inventory-lib/core/model/entities';
import { CreateArticleServiceOutbound } from '@/inventory-lib/core/services/outbound/article';

export class CreateArticleUseCase implements CreateArticleServiceInbound {
  constructor(private readonly outbound: CreateArticleServiceOutbound) {}

  createArticle(article: ArticleInput): Promise<ArticleEntity> {
    return this.outbound.createArticle(article);
  }
}
