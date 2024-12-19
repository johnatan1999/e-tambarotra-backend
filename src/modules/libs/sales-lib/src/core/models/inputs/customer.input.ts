export type CustomerInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  type: 'individual' | 'enterprise';
  businessId: number;
  businessName: string;
};
