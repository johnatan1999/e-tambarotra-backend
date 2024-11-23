import { Module } from '@nestjs/common';
import { OrderModule } from '@/sales-lib/module/orders';

@Module({
  imports: [OrderModule],
  exports: [OrderModule],
})
export class SalesLibModule {}
