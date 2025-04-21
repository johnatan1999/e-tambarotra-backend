import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { StockAdjustmentInput } from '@/inventory-lib/core/models/inputs';

export const CREATE_STOCK_ADJUSTMENT_SERVICE_INBOUND =
  'CREATE_STOCK_ADJUSTMENT_SERVICE_INBOUND';

export interface CreateStockAdjustmentServiceInbound {
  /**
   * Inbound interface for creating stock adjustments in the system.
   *
   * @interface CreateStockAdjustmentServiceInbound
   */
  create(
    userId: number,
    input: StockAdjustmentInput,
  ): Promise<StockAdjustmentEntity>;
}
