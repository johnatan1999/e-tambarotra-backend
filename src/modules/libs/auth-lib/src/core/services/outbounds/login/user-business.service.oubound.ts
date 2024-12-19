import { BusinessEntity } from '@/auth-lib/core/models/entities';

export interface UserBusinessServiceOutbound {
  /**
   * @description Retrieves the businesses ids associated with a user.
   * @param {BusinessEntity} userId The ID of the user.
   * @returns {Promise<number[]>} A promise that resolves to an array of business IDs.
   */
  getUserBusinesses(userId: number): Promise<BusinessEntity[]>;
}
