import { Module } from '@nestjs/common';
import { PurchaseModule } from '@/purchase-lib/modules/purchase';

@Module({
  imports: [PurchaseModule],
  exports: [PurchaseModule],
})
export class PurchaseLibModule {}
