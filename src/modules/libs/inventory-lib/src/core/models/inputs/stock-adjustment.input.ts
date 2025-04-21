export type StockAdjustmentInput = {
  type: 'quantity' | 'value' | 'both';
  adjustedQuantity: number;
  newQuantity: number;
  adjustedPrice?: number;
  costPrice?: number; // For a purchase
  productId: number;
  note?: string;
  reason: string;
  date?: Date;
};
