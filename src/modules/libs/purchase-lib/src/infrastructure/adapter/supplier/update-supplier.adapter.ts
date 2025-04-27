import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSupplierServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier/update-supplier.service.outbound';
import { SupplierDbEntity } from '@/infrastructure-lib/database/entities';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { UpdateSupplierInput } from '@/purchase-lib/core/models/inputs';

@Injectable()
export class UpdateSupplierAdapter implements UpdateSupplierServiceOutbound {
  constructor(
    @InjectRepository(SupplierDbEntity)
    private readonly repository: Repository<SupplierDbEntity>,
  ) {}

  async updateSupplier(
    id: number,
    input: UpdateSupplierInput,
  ): Promise<SupplierEntity> {
    const supplier = this.repository.create({
      ...input,
    });
    await this.repository.update(id, supplier);
    return await this.repository.findOneByOrFail({ id });
  }
}
