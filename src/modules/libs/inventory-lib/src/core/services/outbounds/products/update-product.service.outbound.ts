import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';

export const UPDATE_PRODUCT_SERVICE_OUTBOUND =
  'UPDATE_PRODUCT_SERVICE_OUTBOUND';

/**
 * Outbound interface for updating a product in the system.
 *
 * @interface UpdateProductServiceOutbound
 */
export interface UpdateProductServiceOutbound {
  /**
   * Updates a product in the system.
   *
   * @param id The id of the product to be updated.
   * @param product The information of the product to be updated.
   * @returns A promise that resolves to the updated product.
   */
  updateProduct(id: string, product: ProductInput): Promise<ProductEntity>;
}
