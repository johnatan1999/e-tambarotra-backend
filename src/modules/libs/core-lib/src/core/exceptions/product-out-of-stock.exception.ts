export class ProductOutOfStockException extends Error {
  productId?: number;

  constructor(message: string, productId?: number) {
    super(message);
    this.name = 'ProductOutOfStockException';

    // Attach the productId for additional context
    if (productId) {
      this.productId = productId;
    }

    // Restore the prototype chain (important for instanceof checks)
    Object.setPrototypeOf(this, ProductOutOfStockException.prototype);
  }
}
