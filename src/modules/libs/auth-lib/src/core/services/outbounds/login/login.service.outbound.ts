import { UserEntity } from '@/auth-lib/core/models/entities/user.entity';

export interface LoginServiceOutbound {
  /**
   * Retrieves a user by email.
   *
   * @param {string} email - The email of the user to retrieve.
   * @returns {Promise<LoginOutput>} A promise that resolves to the user's login output.
   */
  getUserByEmail(email: string): Promise<UserEntity>;
}
