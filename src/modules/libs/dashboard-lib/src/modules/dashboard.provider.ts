import { Provider } from '@nestjs/common';
import { GetTotalBudgetAdapter } from '@/dashboard-lib/infrastructure/adapters';
import { GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND } from '@/dashboard-lib/core/services/inbounds';
import { GetBasicStatOverviewUseCase } from '@/dashboard-lib/core/usecases';

export const dashboardProviders: Provider[] = [
  {
    inject: [GetTotalBudgetAdapter],
    provide: GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND,
    useFactory: (outbound: GetTotalBudgetAdapter) => {
      return new GetBasicStatOverviewUseCase(outbound);
    },
  },
];
