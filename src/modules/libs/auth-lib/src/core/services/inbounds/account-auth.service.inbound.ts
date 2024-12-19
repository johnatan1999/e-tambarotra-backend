import { AccountEntity } from '@/auth-lib/core/models/entities';

export const ACCOUNT_AUTH_SERVICE_INBOUND = 'ACCOUNT_AUTH_SERVICE_INBOUND';

export interface AccountAuthServiceInbound {
  /**
   * @description Retrieves the user account information from the token.
   * @param {string} token The token containing the user account information.
   * @returns {Promise<AccountEntity>} A promise that resolves to the user account information.
   */
  readAccountFromToken(token: string): Promise<AccountEntity>;
}
