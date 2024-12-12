import { Module } from '@nestjs/common';
import {
  GetBestSellingProductsAdapter,
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
  GetBestSellingProductsUseCase,
  GetLatestOrdersUseCase,
  GetLatestProductsUseCase,
  GetSalesStatUseCase,
} from '@/dashboard-lib/core/usecases';
import {
  GetBasicStatOverviewService,
  GetBestSellingProductsService,
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
  GetBestSellingProductsAdapter,
];
const useCases = [
  GetBasicStatOverviewUseCase,
  GetSalesStatUseCase,
  GetLatestProductsUseCase,
  GetLatestOrdersUseCase,
  GetBestSellingProductsUseCase,
];
const services = [
  GetBasicStatOverviewService,
  GetSalesStatService,
  GetLatestProductsService,
  GetLatestOrdersService,
  GetBestSellingProductsService,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...dashboardProviders, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases],
})
export class DashboardModule {}
