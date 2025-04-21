export class ProductEntity {
  id: number;
  name: string;
  imageUrl?: string;
  sellingPrice: number;
  firstPurchasePrice: number;
  purchasePrice: number;
  costPrice?: number;
  availableStock: number;
  initialQuantity?: number;
  reorderThreshold: number;
  business: { id: number };
}
