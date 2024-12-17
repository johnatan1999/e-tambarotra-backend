export interface ProductValidator {
  /**
   * Checks if a product exists by the given product ID.
   * @param productId - The ID of the product to check.
   * @returns A promise that resolves to true if the product exists, otherwise false.
   */
  productExists(productId: number): Promise<boolean>;
}
