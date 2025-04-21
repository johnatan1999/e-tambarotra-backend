import {
  CREATE_STOCK_ADJUSTMENT_SERVICE_INBOUND,
  CreateStockAdjustmentServiceInbound,
} from '@/inventory-lib/core/services/inbounds/stock-adjustment';
import { Inject, Injectable } from '@nestjs/common';
import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { StockAdjustmentInput } from '@/inventory-lib/core/models/inputs';

@Injectable()
export class CreateStockAdjustmentService {
  constructor(
    @Inject(CREATE_STOCK_ADJUSTMENT_SERVICE_INBOUND)
    private readonly createStockAdjustmentServiceInbound: CreateStockAdjustmentServiceInbound,
  ) {}

  async create(
    userId: number,
    input: StockAdjustmentInput,
  ): Promise<StockAdjustmentEntity> {
    return this.createStockAdjustmentServiceInbound.create(userId, input);
  }
}
