import { Module } from '@nestjs/common';
import { PurchaseModule } from '@/purchase-lib/modules/purchase';
import { SupplierModule } from '@/purchase-lib/modules/supplier';

@Module({
  imports: [PurchaseModule, SupplierModule],
  exports: [PurchaseModule, SupplierModule],
})
export class PurchaseLibModule {}
