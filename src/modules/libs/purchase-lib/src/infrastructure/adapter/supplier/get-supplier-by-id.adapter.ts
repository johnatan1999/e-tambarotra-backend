import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetSupplierByIdServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier/get-supplier-by-id.service.outbound';
import { SupplierDbEntity } from '@/infrastructure-lib/database/entities';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Injectable()
export class GetSupplierByIdAdapter implements GetSupplierByIdServiceOutbound {
  constructor(
    @InjectRepository(SupplierDbEntity)
    private readonly repository: Repository<SupplierDbEntity>,
  ) {}

  async getSupplierById(id: number): Promise<SupplierEntity> {
    const supplier = await this.repository.findOne({
      relations: ['createdBy', 'updatedBy'],
      where: { id },
    });
    return {
      ...supplier,
      createdBy: {
        firstName: supplier.createdBy.firstName,
        lastName: supplier.createdBy.lastName,
      },
      updatedBy: supplier.updatedBy && {
        firstName: supplier.updatedBy.firstName,
        lastName: supplier.updatedBy.lastName,
      },
    };
  }
}
