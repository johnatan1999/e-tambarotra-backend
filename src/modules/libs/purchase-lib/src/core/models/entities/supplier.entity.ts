export type SupplierEntity = {
  id: number;
  name: string;
  contactName?: string;
  phone?: string;
  email?: string;
  address?: string;
  companyName?: string;
  createdBy?: { firstName: string; lastName: string };
  updatedBy?: { firstName: string; lastName: string };
};
