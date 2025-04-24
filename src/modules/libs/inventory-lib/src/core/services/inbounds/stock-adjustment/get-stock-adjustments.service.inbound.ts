import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { AccountEntity } from '@/auth-lib/core/models/entities';

export const GET_STOCK_ADJUSTMENTS_SERVICE_INBOUND =
  'GET_STOCK_ADJUSTMENTS_SERVICE_INBOUND';

export interface GetStockAdjustmentsServiceInbound {
  /**
   * Retrieves a list of stock adjustments associated with a specific business.
   *
   * @param {AccountEntity} account - The user account infos.
   * @param options - An object containing optional query parameters.
   * @property {number} limit - The maximum number of stock adjustments to retrieve.
   * @property {number} offset - The number of stock adjustments to skip before retrieving the list.
   * @property {string} sortBy - The field to sort the stock adjustments by.
   * @property {'ASC'|'DESC'} sortOrder - The order in which to sort the stock adjustments.
   * @returns A promise that resolves to an array of StockAdjustmentEntity objects.
   */
  getStockAdjustments(
    account: AccountEntity,
    options?: {
      limit?: number;
      offset?: number;
      sortBy?: string;
      sortOrder?: 'ASC' | 'DESC';
    },
  ): Promise<StockAdjustmentEntity[]>;
}
