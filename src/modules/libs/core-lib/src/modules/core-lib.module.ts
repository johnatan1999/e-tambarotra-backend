import { Module } from '@nestjs/common';
import { StateModule } from '@/core-lib/modules/state';

@Module({
  imports: [StateModule],
  exports: [StateModule],
})
export class CoreLibModule {}
