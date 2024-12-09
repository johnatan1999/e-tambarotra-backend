import { Inject, Injectable } from '@nestjs/common';
import {
  GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND,
  GetBasicStatOverviewServiceInbound,
} from '@/dashboard-lib/core/services/inbounds';
import { BasicStatOverviewEntity } from '@/dashboard-lib/core/models/entities';

@Injectable()
export class GetBasicStatOverviewService {
  constructor(
    @Inject(GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND)
    private readonly inbound: GetBasicStatOverviewServiceInbound,
  ) {}

  async getBasicStatOverview(
    businessId: number,
  ): Promise<BasicStatOverviewEntity> {
    return this.inbound.getBasicStatOverview(businessId);
  }
}
