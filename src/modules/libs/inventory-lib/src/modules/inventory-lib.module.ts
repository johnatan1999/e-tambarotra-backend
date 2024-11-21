import { Module } from '@nestjs/common';
import { ProductsModule } from './products';

@Module({
  imports: [ProductsModule],
  exports: [ProductsModule],
})
export class InventoryLibModule {}
