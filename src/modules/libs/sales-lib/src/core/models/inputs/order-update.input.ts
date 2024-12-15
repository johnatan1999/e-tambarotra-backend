export type OrderUpdateInput = {
  status?: string;
  customerId: number;
  orderDate?: string;
  items: {
    id?: string; // Optional for new items
    productId: number;
    quantity: number;
    unitPrice: number;
  }[];
};
