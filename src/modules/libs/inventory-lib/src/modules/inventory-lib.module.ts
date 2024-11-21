import { Module } from '@nestjs/common';
import { ArticleModule } from './articles';

@Module({
  imports: [ArticleModule],
  exports: [ArticleModule],
})
export class InventoryLibModule {}
