export type LatestOrderEntity = {
  id: number;
  customer: {
    id: number;
    name: string;
  };
  status: string;
  items: {
    id: number;
    unitPrice: number;
    quantity: number;
    product: {
      id: number;
      name: string;
    };
  }[];
  createdAt: string;
};
