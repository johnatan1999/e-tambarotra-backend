import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { GetSuppliersByBusinessServiceInbound } from '@/purchase-lib/core/services/inbounds/supplier';
import { GetSuppliersByBusinessServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier';
import { getCurrentBusiness } from '@/core-lib/utils/user-session.helper';

export class GetSuppliersByBusinessUseCase
  implements GetSuppliersByBusinessServiceInbound
{
  constructor(
    private readonly outbound: GetSuppliersByBusinessServiceOutbound,
    private readonly userSessionOutbound: UserSessionServiceOutbound,
  ) {}

  async getSuppliersByBusiness(
    account: AccountEntity,
  ): Promise<SupplierEntity[]> {
    const business = await getCurrentBusiness(
      account,
      this.userSessionOutbound,
    );
    return this.outbound.getSuppliersByBusiness(business.id);
  }
}
