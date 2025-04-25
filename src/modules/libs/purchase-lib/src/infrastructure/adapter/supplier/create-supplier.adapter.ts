import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSupplierServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier/create-supplier.service.outbound';
import { SupplierDbEntity } from '@/infrastructure-lib/database/entities';
import { CreateSupplierInput } from 'modules/libs/purchase-lib/src/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Injectable()
export class CreateSupplierAdapter implements CreateSupplierServiceOutbound {
  constructor(
    @InjectRepository(SupplierDbEntity)
    private readonly supplierRepository: Repository<SupplierDbEntity>,
  ) {}

  async createSupplier(
    userId: number,
    businessId: number,
    supplierInput: CreateSupplierInput,
  ): Promise<SupplierEntity> {
    const supplier = this.supplierRepository.create({
      ...supplierInput,
      createdBy: { id: userId },
      business: { id: businessId },
    });
    return await this.supplierRepository.save(supplier);
  }
}
