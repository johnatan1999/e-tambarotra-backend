import { CreateArticleServiceOutbound } from '@/inventory-lib/core/services/outbound/article';
import { ArticleInput } from '@/inventory-lib/core/model/inputs';
import { ArticleEntity } from '@/inventory-lib/core/model/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateArticleAdapter implements CreateArticleServiceOutbound {
  createArticle(article: ArticleInput): Promise<ArticleEntity> {
    return Promise.resolve(undefined);
  }
}
