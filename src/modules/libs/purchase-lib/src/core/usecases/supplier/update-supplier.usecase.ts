import { UpdateSupplierServiceInbound } from '@/purchase-lib/core/services/inbounds/supplier/update-supplier.service.inbound';
import { UpdateSupplierServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier/update-supplier.service.outbound';
import { UpdateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

export class UpdateSupplierUseCase implements UpdateSupplierServiceInbound {
  constructor(
    private readonly updateSupplierServiceOutbound: UpdateSupplierServiceOutbound,
  ) {}

  async updateSupplier(
    id: number,
    input: UpdateSupplierInput,
  ): Promise<SupplierEntity> {
    return this.updateSupplierServiceOutbound.updateSupplier(id, input);
  }
}
