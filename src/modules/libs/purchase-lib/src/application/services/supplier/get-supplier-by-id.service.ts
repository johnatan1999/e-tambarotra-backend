import { Inject, Injectable } from '@nestjs/common';
import {
  GET_SUPPLIER_BY_ID_SERVICE_INBOUND,
  GetSupplierByIdServiceInbound,
} from '@/purchase-lib/core/services/inbounds/supplier';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Injectable()
export class GetSupplierByIdService {
  constructor(
    @Inject(GET_SUPPLIER_BY_ID_SERVICE_INBOUND)
    private readonly getSupplierByIdServiceInbound: GetSupplierByIdServiceInbound,
  ) {}

  async getSupplierById(id: number): Promise<SupplierEntity> {
    return this.getSupplierByIdServiceInbound.getSupplierById(id);
  }
}
