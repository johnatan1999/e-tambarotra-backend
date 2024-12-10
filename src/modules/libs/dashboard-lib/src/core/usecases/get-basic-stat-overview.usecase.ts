import { GetBasicStatOverviewServiceInbound } from '@/dashboard-lib/core/services/inbounds';
import {
  GetTotalBudgetServiceOutbound,
  GetTotalCustomersServiceOutbound,
  GetTotalExpensesServiceOutbound,
  GetTotalProfitServiceOutbound,
} from '@/dashboard-lib/core/services/outbounds';
import { BasicStatOverviewEntity } from '@/dashboard-lib/core/models/entities';

export class GetBasicStatOverviewUseCase
  implements GetBasicStatOverviewServiceInbound
{
  constructor(
    private readonly totalBudgetOutbound: GetTotalBudgetServiceOutbound,
    private readonly totalProfitOutbound: GetTotalProfitServiceOutbound,
    private readonly totalExpensesOutbound: GetTotalExpensesServiceOutbound,
    private readonly totalCustomersOutbound: GetTotalCustomersServiceOutbound,
  ) {}

  async getBasicStatOverview(
    businessId: number,
  ): Promise<BasicStatOverviewEntity> {
    const totalBudget =
      await this.totalBudgetOutbound.getTotalBudget(businessId);
    const totalProfit =
      await this.totalProfitOutbound.getTotalProfit(businessId);
    const totalExpenses =
      await this.totalExpensesOutbound.getTotalExpenses(businessId);
    const totalCustomers =
      await this.totalCustomersOutbound.getTotalCustomers(businessId);
    return {
      totalBudget,
      totalProfit,
      totalExpenses,
      totalCustomers,
    };
  }
}
