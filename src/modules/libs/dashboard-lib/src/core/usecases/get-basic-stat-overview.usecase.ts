import { GetBasicStatOverviewServiceInbound } from '@/dashboard-lib/core/services/inbounds';
import { GetTotalBudgetServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { BasicStatOverviewEntity } from '@/dashboard-lib/core/models/entities';

export class GetBasicStatOverviewUseCase
  implements GetBasicStatOverviewServiceInbound
{
  constructor(private readonly outbound: GetTotalBudgetServiceOutbound) {}

  async getBasicStatOverview(
    businessId: number,
  ): Promise<BasicStatOverviewEntity> {
    const totalBudget = await this.outbound.getTotalBudget(businessId);

    return {
      totalBudget,
    };
  }
}
