export type OrderInput = {
  customer: {
    id: number;
  };
  status: string;
  items: {
    product: {
      id: number;
    };
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
  business: {
    id: number;
  };
  orderDate: string;
};
