import { StockAdjustmentInput } from '@/inventory-lib/core/models/inputs';
import { StockAdjustmentAdapterEntity } from '@/inventory-lib/infrastructure/entities';

export interface CreateStockAdjustmentServiceOutbound {
  /**
   * Inbound interface for creating stock adjustments in the system.
   *
   * @interface CreateStockAdjustmentServiceInbound
   */
  create(
    userId: number,
    input: StockAdjustmentInput,
  ): Promise<StockAdjustmentAdapterEntity>;
}
