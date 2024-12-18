import { Provider } from '@nestjs/common';
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
  GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND,
  GET_BEST_SELLING_PRODUCTS_SERVICE_INBOUND,
  GET_LATEST_ORDERS_SERVICE_INBOUND,
  GET_LATEST_PRODUCTS_SERVICE_INBOUND,
  GET_SALES_STAT_SERVICE_INBOUND,
} from '@/dashboard-lib/core/services/inbounds';
import {
  GetBasicStatOverviewUseCase,
  GetBestSellingProductsUseCase,
  GetLatestOrdersUseCase,
  GetLatestProductsUseCase,
  GetSalesStatUseCase,
} from '@/dashboard-lib/core/usecases';

export const dashboardProviders: Provider[] = [
  {
    inject: [
      GetTotalBudgetAdapter,
      GetTotalProfitAdapter,
      GetTotalExpensesAdapter,
      GetTotalCustomersAdapter,
    ],
    provide: GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND,
    useFactory: (
      totalBudgetAdapter: GetTotalBudgetAdapter,
      totalProfitAdapter: GetTotalProfitAdapter,
      totalExpensesAdapter: GetTotalExpensesAdapter,
      totalCustomerAdapter: GetTotalCustomersAdapter,
    ) => {
      return new GetBasicStatOverviewUseCase(
        totalBudgetAdapter,
        totalProfitAdapter,
        totalExpensesAdapter,
        totalCustomerAdapter,
      );
    },
  },
  {
    inject: [GetSalesStatAdapter],
    provide: GET_SALES_STAT_SERVICE_INBOUND,
    useFactory: (salesStatAdapter: GetSalesStatAdapter) => {
      return new GetSalesStatUseCase(salesStatAdapter);
    },
  },
  {
    inject: [GetLatestProductsAdapter],
    provide: GET_LATEST_PRODUCTS_SERVICE_INBOUND,
    useFactory: (latestProductsAdapter: GetLatestProductsAdapter) => {
      return new GetLatestProductsUseCase(latestProductsAdapter);
    },
  },
  {
    inject: [GetLatestOrdersAdapter],
    provide: GET_LATEST_ORDERS_SERVICE_INBOUND,
    useFactory: (latestOrdersService: GetLatestOrdersAdapter) => {
      return new GetLatestOrdersUseCase(latestOrdersService);
    },
  },
  {
    inject: [GetBestSellingProductsAdapter],
    provide: GET_BEST_SELLING_PRODUCTS_SERVICE_INBOUND,
    useFactory: (bestSellingProductsAdapter: GetBestSellingProductsAdapter) => {
      return new GetBestSellingProductsUseCase(bestSellingProductsAdapter);
    },
  },
];
