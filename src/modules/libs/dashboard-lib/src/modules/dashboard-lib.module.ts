import { Module } from '@nestjs/common';
import { DashboardModule } from '@/dashboard-lib/modules/index';

@Module({
  imports: [DashboardModule],
  exports: [DashboardModule],
})
export class DashboardLibModule {}
