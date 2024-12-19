import { BusinessInput } from '@/users-lib/core/models/inputs';
import { BusinessEntity } from '@/users-lib/core/models/entities';

/**
 * Inbound interface for creating a business in the system.
 *
 * @interface CreateBusinessServiceInbound
 */
export interface CreateBusinessServiceInbound {
  /**
   * @description Creates a new business in the system.
   * @param {BusinessInput} businessInput The input data for the business.
   * @returns {Promise<BusinessEntity>} A promise that resolves to the newly created business.
   */
  createBusiness(businessInput: BusinessInput): Promise<BusinessEntity>;
}

export const CREATE_BUSINESS_SERVICE_INBOUND =
  'CREATE_BUSINESS_SERVICE_INBOUND';
