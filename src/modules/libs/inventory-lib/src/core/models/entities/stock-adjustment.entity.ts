export type StockAdjustmentEntity = {
  id: number;
  product: { id: number; name: string };
  newQuantity: number;
  adjustedQuantity: number;
  adjustedUnitPrice?: number;
  type: 'quantity' | 'value' | 'both';
  reason: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};
