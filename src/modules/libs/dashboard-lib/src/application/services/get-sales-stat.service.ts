import { Inject, Injectable } from '@nestjs/common';
import {
  GET_SALES_STAT_SERVICE_INBOUND,
  GetSalesStatServiceInbound,
} from '@/dashboard-lib/core/services/inbounds';
import { SalesStatOutput } from '@/dashboard-lib/application/models/outputs';

@Injectable()
export class GetSalesStatService {
  constructor(
    @Inject(GET_SALES_STAT_SERVICE_INBOUND)
    private readonly inbound: GetSalesStatServiceInbound,
  ) {}

  async getSalesStat(
    businessId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<SalesStatOutput> {
    const result = await this.inbound.getSalesStat(
      businessId,
      startDate,
      endDate,
    );
    return { data: result };
  }
}
