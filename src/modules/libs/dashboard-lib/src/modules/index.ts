import { Module } from '@nestjs/common';
import {
  GetSalesStatAdapter,
  GetTotalBudgetAdapter,
  GetTotalCustomersAdapter,
  GetTotalExpensesAdapter,
  GetTotalProfitAdapter,
} from '@/dashboard-lib/infrastructure/adapters';
import {
  GetBasicStatOverviewUseCase,
  GetSalesStatUseCase,
} from '@/dashboard-lib/core/usecases';
import {
  GetBasicStatOverviewService,
  GetSalesStatService,
} from '@/dashboard-lib/application/services';
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
  GetSalesStatAdapter,
];
const useCases = [GetBasicStatOverviewUseCase, GetSalesStatUseCase];
const services = [GetBasicStatOverviewService, GetSalesStatService];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...dashboardProviders, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases],
})
export class DashboardModule {}
