import { Inject, Injectable } from '@nestjs/common';
import {
  GET_SUPPLIERS_BY_BUSINESS_SERVICE_INBOUND,
  GetSuppliersByBusinessServiceInbound,
} from '@/purchase-lib/core/services/inbounds/supplier';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Injectable()
export class GetSuppliersByBusinessService {
  constructor(
    @Inject(GET_SUPPLIERS_BY_BUSINESS_SERVICE_INBOUND)
    private readonly inbound: GetSuppliersByBusinessServiceInbound,
  ) {}

  async getSuppliersByBusiness(
    account: AccountEntity,
  ): Promise<SupplierEntity[]> {
    return this.inbound.getSuppliersByBusiness(account);
  }
}
