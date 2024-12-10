import { GetSalesStatServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { GetSalesStatServiceInbound } from '@/dashboard-lib/core/services/inbounds';
import { SalesStatEntity } from '@/dashboard-lib/core/models/entities';

export class GetSalesStatUseCase implements GetSalesStatServiceInbound {
  constructor(
    private readonly stateServiceOutbound: GetSalesStatServiceOutbound,
  ) {}

  async getSalesStat(
    businessId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<SalesStatEntity[]> {
    const result = await this.stateServiceOutbound.getSalesStat(
      businessId,
      startDate,
      endDate,
    );
    while (startDate <= endDate) {
      const date = startDate.toISOString().split('T')[0];
      if (!result.find((item) => item.date === date)) {
        result.push({ date: date, total: 0 });
      }
      startDate.setDate(startDate.getDate() + 1);
    }
    result.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    return result;
  }
}
