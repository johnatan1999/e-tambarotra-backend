import { CustomerInput } from '@/sales-lib/core/models/inputs';
import { CustomerEntity } from '@/sales-lib/core/models/entities';

export const CREATE_CUSTOMER_SERVICE_OUTBOUND =
  'CREATE_CUSTOMER_SERVICE_OUTBOUND';

export interface CreateCustomerServiceOutbound {
  /**
   * Creates a new customer in the system.
   *
   * @param customer The information of the customer to be created.
   * @returns A promise that resolves to the newly created customer.
   */
  createCustomer(customer: CustomerInput): Promise<CustomerEntity>;
}
