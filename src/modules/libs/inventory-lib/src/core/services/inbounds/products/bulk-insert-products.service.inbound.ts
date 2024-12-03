import { ProductInput } from '@/inventory-lib/core/model/inputs';

export const BULK_INSERT_PRODUCTS_SERVICE_INBOUND =
  'BULK_INSERT_PRODUCTS_SERVICE_INBOUND';

/**
 * Inbound interface for bulk inserting products in the system.
 *
 * @interface BulkInsertProductsServiceInbound
 */
export interface BulkInsertProductsServiceInbound {
  /**
   * Inserts multiple products into the system.
   *
   * @param {ProductInput[]} products - The products to be inserted.
   * @returns {Promise<void>} A promise that resolves when the products are inserted.
   */
  createProducts(products: ProductInput[]): Promise<void>;
}
