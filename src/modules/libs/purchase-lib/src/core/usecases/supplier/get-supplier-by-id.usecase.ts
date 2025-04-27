import { GetSupplierByIdServiceInbound } from '@/purchase-lib/core/services/inbounds/supplier/get-supplier-by-id.service.inbound';
import { GetSupplierByIdServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier/get-supplier-by-id.service.outbound';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

export class GetSupplierByIdUseCase implements GetSupplierByIdServiceInbound {
  constructor(
    private readonly getSupplierByIdServiceOutbound: GetSupplierByIdServiceOutbound,
  ) {}

  async getSupplierById(id: number): Promise<SupplierEntity> {
    return this.getSupplierByIdServiceOutbound.getSupplierById(id);
  }
}
