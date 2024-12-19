export type BusinessEntity = {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  createdAt: Date;
  owner: { id: number };
};
