import { AccountAuthServiceInbound } from '@/auth-lib/core/services/inbounds/account-auth.service.inbound';
import { AccountAuthServiceOutbound } from '@/auth-lib/core/services/outbounds';
import { AccountEntity } from '@/auth-lib/core/models/entities';

export class AccountAuthUseCase implements AccountAuthServiceInbound {
  constructor(private readonly outbound: AccountAuthServiceOutbound) {}

  async readAccountFromToken(token: string): Promise<AccountEntity> {
    return this.outbound.readAccountFromToken(token);
  }
}
