export interface UpdateProductStockServiceOutbound {
  /**
   * Outbound interface for updating a product stock in the system.
   *
   * @interface UpdateProductStockServiceOutbound
   */
  updateStock(productId: number, quantity: number): Promise<void>;
}
