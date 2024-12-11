import { Module } from '@nestjs/common';
import {
  GetLatestOrdersAdapter,
  GetLatestProductsAdapter,
  GetSalesStatAdapter,
  GetTotalBudgetAdapter,
  GetTotalCustomersAdapter,
  GetTotalExpensesAdapter,
  GetTotalProfitAdapter,
} from '@/dashboard-lib/infrastructure/adapters';
import {
  GetBasicStatOverviewUseCase,
  GetLatestOrdersUseCase,
  GetLatestProductsUseCase,
  GetSalesStatUseCase,
} from '@/dashboard-lib/core/usecases';
import {
  GetBasicStatOverviewService,
  GetLatestOrdersService,
  GetLatestProductsService,
  GetSalesStatService,
} from '@/dashboard-lib/application/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dashboardProviders } from '@/dashboard-lib/modules/dashboard.provider';
import {
  CustomerDbEntity,
  OrderDbEntity,
  ProductsDbEntity,
} from '@/infrastructure-lib/database/entities';

const entities = [ProductsDbEntity, CustomerDbEntity, OrderDbEntity];
const adapters = [
  GetTotalBudgetAdapter,
  GetTotalProfitAdapter,
  GetTotalExpensesAdapter,
  GetTotalCustomersAdapter,
  GetSalesStatAdapter,
  GetLatestProductsAdapter,
  GetLatestOrdersAdapter,
];
const useCases = [
  GetBasicStatOverviewUseCase,
  GetSalesStatUseCase,
  GetLatestProductsUseCase,
  GetLatestOrdersUseCase,
];
const services = [
  GetBasicStatOverviewService,
  GetSalesStatService,
  GetLatestProductsService,
  GetLatestOrdersService,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...dashboardProviders, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases],
})
export class DashboardModule {}
