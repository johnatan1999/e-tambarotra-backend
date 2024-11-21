import { Provider } from '@nestjs/common';
import { CreateArticleUseCase } from '@/inventory-lib/core/usecases/articles/create-article.usecase';
import { CreateArticleAdapter } from '@/inventory-lib/adapter/articles/create-article.adapter';
import { CREATE_ARTICLE_SERVICE_INBOUND } from '@/inventory-lib/core/services/inbound/article';

export const ArticleProviders: Provider[] = [
  {
    inject: [CreateArticleAdapter],
    provide: CREATE_ARTICLE_SERVICE_INBOUND,
    useFactory: (outbound: CreateArticleAdapter) => {
      return new CreateArticleUseCase(outbound);
    },
  },
];
