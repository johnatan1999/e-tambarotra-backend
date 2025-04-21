export class ProductInput {
  availableStock: number;
  initialQuantity?: number;
  businessId: number;
  imageUrl: string;
  name: string;
  sellingPrice: number;
  purchasePrice: number;
  costPrice?: number;
  firstPurchasePrice: number;
  reorderThreshold: number;
}
