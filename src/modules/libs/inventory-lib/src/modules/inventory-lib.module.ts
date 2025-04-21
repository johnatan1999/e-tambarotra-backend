import { Module } from '@nestjs/common';
import { ProductsModule } from './products';
import { StockAdjustmentModule } from '@/inventory-lib/modules/stock-adjustment';

@Module({
  imports: [ProductsModule, StockAdjustmentModule],
  exports: [ProductsModule, StockAdjustmentModule],
})
export class InventoryLibModule {}
