import { BusinessEntity } from '@/users-lib/core/models/entities';
import { BusinessInput } from '@/users-lib/core/models/inputs';

export const CREATE_BUSINESS_SERVICE_OUTBOUND =
  'CREATE_BUSINESS_SERVICE_OUTBOUND';

/**
 * Outbound interface for creating a new business in the system.
 *
 * @interface CreateBusinessServiceOutbound
 */
export interface CreateBusinessServiceOutbound {
  /**
   * Creates a new business.
   *
   * @param {BusinessInput} businessInput - The input data for the business.
   * @returns {Promise<BusinessEntity>} - The newly created business entity.
   */
  createBusiness(businessInput: BusinessInput): Promise<BusinessEntity>;
}
