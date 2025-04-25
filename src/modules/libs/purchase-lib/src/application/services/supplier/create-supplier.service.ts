import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_SUPPLIER_SERVICE_INBOUND,
  CreateSupplierServiceInbound,
} from '@/purchase-lib/core/services/inbounds/supplier';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { CreateSupplierInput } from '@/purchase-lib/core/models/inputs';

@Injectable()
export class CreateSupplierService {
  constructor(
    @Inject(CREATE_SUPPLIER_SERVICE_INBOUND)
    private readonly createSupplierServiceInbound: CreateSupplierServiceInbound,
  ) {}

  async createSupplier(
    account: AccountEntity,
    input: CreateSupplierInput,
  ): Promise<SupplierEntity> {
    return this.createSupplierServiceInbound.createSupplier(account, input);
  }
}
