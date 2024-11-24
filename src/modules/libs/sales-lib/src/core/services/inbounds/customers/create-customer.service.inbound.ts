import { CustomerInput } from '@/sales-lib/core/models/inputs';
import { CustomerEntity } from '@/sales-lib/core/models/entities';

export const CREATE_CUSTOMER_SERVICE_INBOUND =
  'CREATE_CUSTOMER_SERVICE_INBOUND';

/**
 * Inbound interface for creating customers in the system.
 *
 * @interface CreateCustomerServiceInbound
 */
export interface CreateCustomerServiceInbound {
  /**
   * Creates a new customer in the system.
   *
   * @param customer The information of the customer to be created.
   * @returns A promise that resolves to the newly created customer.
   */
  createCustomer(customer: CustomerInput): Promise<CustomerEntity>;
}
