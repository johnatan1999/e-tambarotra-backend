import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { CreateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { CreateSupplierServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier';
import { CreateSupplierServiceInbound } from '@/purchase-lib/core/services/inbounds/supplier';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { NotFoundException } from '@/core-lib/core/exceptions/not-found.exception';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';

export class CreateSupplierUseCase implements CreateSupplierServiceInbound {
  constructor(
    private readonly createSupplierServiceOutbound: CreateSupplierServiceOutbound,
    private readonly userSessionOutbound: UserSessionServiceOutbound,
  ) {}

  async createSupplier(
    account: AccountEntity,
    input: CreateSupplierInput,
  ): Promise<SupplierEntity> {
    const business =
      (await this.userSessionOutbound.getUserSession(account.id)) ||
      account.businesses[0];
    if (!business) {
      throw new NotFoundException('Business not found!');
    }
    return this.createSupplierServiceOutbound.createSupplier(
      account.id,
      business.id,
      input,
    );
  }
}
