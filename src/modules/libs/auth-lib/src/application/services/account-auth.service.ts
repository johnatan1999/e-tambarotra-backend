import { Inject, Injectable } from '@nestjs/common';
import {
  ACCOUNT_AUTH_SERVICE_INBOUND,
  AccountAuthServiceInbound,
} from '@/auth-lib/core/services/inbounds/account-auth.service.inbound';
import { AccountEntity } from '@/auth-lib/core/models/entities';

@Injectable()
export class AccountAuthService {
  constructor(
    @Inject(ACCOUNT_AUTH_SERVICE_INBOUND)
    private readonly accountAuthServiceInbound: AccountAuthServiceInbound,
  ) {}

  /**
   * Reads the account information from the provided token.
   * @param {string} token The token containing the account information.
   * @returns {Promise<AccountEntity>} A promise that resolves to the user account information.
   */
  async readAccountFromToken(token: string): Promise<AccountEntity> {
    return this.accountAuthServiceInbound.readAccountFromToken(token);
  }
}
