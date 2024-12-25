import { BusinessEntity } from '@/users-lib/core/models/entities';

export interface GetBusinessesByUserServiceOutbound {
  /**
   * Retrieves a list of businesses associated with a user.
   *
   * @param {number} userId - The unique identifier of the user.
   * @returns {Promise<BusinessEntity[]>} - A promise that resolves to an array of business objects.
   */
  getBusinessesByUser(userId: number): Promise<BusinessEntity[]>;
}
