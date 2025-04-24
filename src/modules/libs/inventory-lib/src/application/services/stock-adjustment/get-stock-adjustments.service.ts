import {
  GET_STOCK_ADJUSTMENTS_SERVICE_INBOUND,
  GetStockAdjustmentsServiceInbound,
} from '@/inventory-lib/core/services/inbounds/stock-adjustment';
import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { Inject, Injectable } from '@nestjs/common';
import { AccountEntity } from '@/auth-lib/core/models/entities';

@Injectable()
export class GetStockAdjustmentsService {
  constructor(
    @Inject(GET_STOCK_ADJUSTMENTS_SERVICE_INBOUND)
    private readonly getStockAdjustmentsServiceInbound: GetStockAdjustmentsServiceInbound,
  ) {}

  async getStockAdjustments(
    account: AccountEntity,
    options?: {
      limit?: number;
      offset?: number;
      sortBy?: string;
      sortOrder?: 'ASC' | 'DESC';
    },
  ): Promise<StockAdjustmentEntity[]> {
    return this.getStockAdjustmentsServiceInbound.getStockAdjustments(
      account,
      options,
    );
  }
}
