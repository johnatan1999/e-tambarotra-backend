import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';

export const BULK_INSERT_PRODUCTS_SERVICE_OUTBOUND =
  'BULK_INSERT_PRODUCTS_SERVICE_OUTBOUND';

export interface BulkInsertProductsServiceOutbound {
  /**
   * Inserts multiple products into the system.
   *
   * @param {ProductInput[]} products - The products to be inserted.
   * @returns {Promise<void>} A promise that resolves when the products are inserted.
   */
  createProducts(products: ProductInput[]): Promise<void>;
}
