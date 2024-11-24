import { Module } from '@nestjs/common';
import { OrderModule } from '@/sales-lib/module/orders';
import { CustomerModule } from '@/sales-lib/module/clients';

@Module({
  imports: [OrderModule, CustomerModule],
  exports: [OrderModule, CustomerModule],
})
export class SalesLibModule {}
