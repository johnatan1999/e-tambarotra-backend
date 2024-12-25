import { BusinessEntity } from '@/users-lib/core/models/entities';

export const GET_BUSINESSES_BY_USER_SERVICE_INBOUND =
  'GET_BUSINESSES_BY_USER_SERVICE_INBOUND';

export interface GetBusinessesByUserServiceInbound {
  /**
   * Retrieves a list of businesses associated with a user.
   *
   * @param {number} userId - The unique identifier of the user.
   * @returns {Promise<any>} - A promise that resolves to an array of business objects.
   */
  getBusinessesByUser(userId: number): Promise<BusinessEntity[]>;
}
