import { UserSessionEntity } from '@/auth-lib/core/models/entities';

export interface UserSessionServiceOutbound {
  /**
   * Retrieves the user session by user ID.
   *
   * @param {number} userId The ID of the user.
   * @returns {Promise<UserSessionEntity>} A promise that resolves to the user session entity.
   */
  getUserSession(userId: number): Promise<UserSessionEntity>;
}
