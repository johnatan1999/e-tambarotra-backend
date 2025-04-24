export type StockAdjustmentAdapterEntity = {
  id: number;
  product: { id: number; name: string };
  newQuantity: number;
  adjustedQuantity: number;
  adjustedUnitPrice?: number;
  type: 'quantity' | 'value' | 'both';
  reason: string;
  createdAt: Date;
  updatedAt: Date;
};
