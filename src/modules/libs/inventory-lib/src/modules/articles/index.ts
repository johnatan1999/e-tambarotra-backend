import { CreateArticleService } from '@/inventory-lib/application/services/articles';
import { CreateArticleUseCase } from '@/inventory-lib/core/usecases/articles/create-article.usecase';
import { Module } from '@nestjs/common';
import { ArticleProviders } from './article.provider';
import { CreateArticleAdapter } from '@/inventory-lib/adapter/articles/create-article.adapter';

const services = [CreateArticleService];
const usecases = [CreateArticleUseCase];
const adapters = [CreateArticleAdapter];

@Module({
  providers: [...ArticleProviders, ...services, ...usecases, ...adapters],
  exports: [...services, ...usecases],
})
export class ArticleModule {}
