export type StockAdjustmentEntity = {
  id: number;
  product: { id: number };
  newQuantity: number;
  adjustedQuantity: number;
  adjustedUnitPrice?: number;
  type: 'quantity' | 'value' | 'both';
  reason: string;
  createdAt: Date;
  updatedAt: Date;
};
