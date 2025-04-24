import { StockAdjustmentAdapterEntity } from '@/inventory-lib/infrastructure/entities';

export interface GetStockAdjustmentsServiceOutbound {
  /**
   * Retrieves a list of stock adjustments associated with a specific business.
   *
   * @param businessId - The unique identifier of the business whose stock adjustments are to be retrieved.
   * @param options - An object containing optional query parameters.
   * @property {number} limit - The maximum number of stock adjustments to retrieve.
   * @property {number} offset - The number of stock adjustments to skip before retrieving the list.
   * @property {string} sortBy - The field to sort the stock adjustments by.
   * @property {'ASC'|'DESC'} sortOrder - The order in which to sort the stock adjustments.
   * @returns A promise that resolves to an array of StockAdjustmentEntity objects.
   */
  getStockAdjustments(
    businessId: number,
    options?: {
      limit?: number;
      offset?: number;
      sortBy?: string;
      sortOrder?: 'ASC' | 'DESC';
    },
  ): Promise<StockAdjustmentAdapterEntity[]>;
}
