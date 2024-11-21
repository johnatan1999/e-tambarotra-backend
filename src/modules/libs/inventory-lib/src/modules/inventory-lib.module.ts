import { Module } from '@nestjs/common';
import { ArticleModule } from './products';

@Module({
  imports: [ArticleModule],
  exports: [ArticleModule],
})
export class InventoryLibModule {}
