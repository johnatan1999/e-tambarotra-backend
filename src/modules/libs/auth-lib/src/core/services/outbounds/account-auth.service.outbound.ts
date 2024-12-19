import { AccountEntity } from '@/auth-lib/core/models/entities';

export const ACCOUNT_AUTH_SERVICE_OUTBOUND = 'ACCOUNT_AUTH_SERVICE_OUTBOUND';

/**
 * Outbound interface for account authentication service.
 *
 * @interface AccountAuthServiceOutbound
 */
export interface AccountAuthServiceOutbound {
  /**
   * @description Retrieves the user account information from the token.
   * @param {string} token The token containing the user account information.
   * @returns {Promise<AccountEntity>} A promise that resolves to the user account information.
   */
  readAccountFromToken(token: string): Promise<AccountEntity>;
}
