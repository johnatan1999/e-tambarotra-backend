import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { CreateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { CreateSupplierServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier';
import { CreateSupplierServiceInbound } from '@/purchase-lib/core/services/inbounds/supplier';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { getCurrentBusiness } from '@/core-lib/utils/user-session.helper';

export class CreateSupplierUseCase implements CreateSupplierServiceInbound {
  constructor(
    private readonly createSupplierServiceOutbound: CreateSupplierServiceOutbound,
    private readonly userSessionOutbound: UserSessionServiceOutbound,
  ) {}

  async createSupplier(
    account: AccountEntity,
    input: CreateSupplierInput,
  ): Promise<SupplierEntity> {
    const business = await getCurrentBusiness(
      account,
      this.userSessionOutbound,
    );
    return this.createSupplierServiceOutbound.createSupplier(
      account.id,
      business.id,
      input,
    );
  }
}
