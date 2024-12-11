import { GetLatestOrdersServiceInbound } from '@/dashboard-lib/core/services/inbounds/get-latest-orders.service.inbound';
import { GetLatestOrdersServiceOutbound } from '@/dashboard-lib/core/services/outbounds/get-latest-orders.service.outbound';
import { LatestOrderEntity } from '@/dashboard-lib/core/models/entities';

export class GetLatestOrdersUseCase implements GetLatestOrdersServiceInbound {
  public static readonly DEFAULT_LIMIT = 10;

  constructor(
    private readonly latestOrdersService: GetLatestOrdersServiceOutbound,
  ) {}

  async getLatestOrders(
    businessId: number,
    limit?: number,
  ): Promise<LatestOrderEntity[]> {
    return this.latestOrdersService.getLatestOrders(
      businessId,
      limit ?? GetLatestOrdersUseCase.DEFAULT_LIMIT,
    );
  }
}
