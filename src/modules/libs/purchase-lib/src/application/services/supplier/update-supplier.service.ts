import { Inject, Injectable } from '@nestjs/common';
import {
  UPDATE_SUPPLIER_SERVICE_INBOUND,
  UpdateSupplierServiceInbound,
} from '@/purchase-lib/core/services/inbounds/supplier/update-supplier.service.inbound';
import { UpdateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Injectable()
export class UpdateSupplierService {
  constructor(
    @Inject(UPDATE_SUPPLIER_SERVICE_INBOUND)
    private readonly updateSupplierServiceInbound: UpdateSupplierServiceInbound,
  ) {}

  async updateSupplier(
    id: number,
    input: UpdateSupplierInput,
  ): Promise<SupplierEntity> {
    return this.updateSupplierServiceInbound.updateSupplier(id, input);
  }
}
