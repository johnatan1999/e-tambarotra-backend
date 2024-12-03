import { ProductEntity } from '@/inventory-lib/core/model/entities';

export interface GetProductByIdServiceOutbound {
  /**
   * Retrieves a product by its unique identifier.
   *
   * @param productId - The unique identifier of the product to be retrieved.
   * @returns A promise that resolves to the retrieved product.
   */
  getProductById(productId: number): Promise<ProductEntity>;
}