import { Module } from '@nestjs/common';
import {
  GetTotalBudgetAdapter,
  GetTotalCustomersAdapter,
  GetTotalExpensesAdapter,
  GetTotalProfitAdapter,
} from '@/dashboard-lib/infrastructure/adapters';
import { GetBasicStatOverviewUseCase } from '@/dashboard-lib/core/usecases';
import { GetBasicStatOverviewService } from '@/dashboard-lib/application/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dashboardProviders } from '@/dashboard-lib/modules/dashboard.provider';
import {
  CustomerDbEntity,
  ProductsDbEntity,
} from '@/infrastructure-lib/database/entities';

const entities = [ProductsDbEntity, CustomerDbEntity];
const adapters = [
  GetTotalBudgetAdapter,
  GetTotalProfitAdapter,
  GetTotalExpensesAdapter,
  GetTotalCustomersAdapter,
];
const useCases = [GetBasicStatOverviewUseCase];
const services = [GetBasicStatOverviewService];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...dashboardProviders, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases],
})
export class DashboardModule {}
