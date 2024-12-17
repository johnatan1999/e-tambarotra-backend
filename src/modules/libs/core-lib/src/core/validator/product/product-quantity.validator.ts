export interface ProductQuantityValidator {
  /**
   * Checks if a product has a given quantity available.
   * @param productId - The ID of the product to check.
   * @param quantity - The quantity to check.
   * @returns A promise that resolves to true if the product has the given quantity available, otherwise false.
   */
  quantityAvailable(productId: number, quantity: number): Promise<boolean>;
}
