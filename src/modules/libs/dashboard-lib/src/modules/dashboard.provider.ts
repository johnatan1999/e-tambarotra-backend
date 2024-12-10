import { Provider } from '@nestjs/common';
import {
  GetSalesStatAdapter,
  GetTotalBudgetAdapter,
  GetTotalCustomersAdapter,
  GetTotalExpensesAdapter,
  GetTotalProfitAdapter,
} from '@/dashboard-lib/infrastructure/adapters';
import {
  GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND,
  GET_SALES_STAT_SERVICE_INBOUND,
} from '@/dashboard-lib/core/services/inbounds';
import {
  GetBasicStatOverviewUseCase,
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
];
