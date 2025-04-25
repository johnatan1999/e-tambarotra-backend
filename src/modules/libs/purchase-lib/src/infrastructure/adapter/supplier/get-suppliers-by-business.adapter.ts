import { Injectable } from '@nestjs/common';
import { GetSuppliersByBusinessServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierDbEntity } from '@/infrastructure-lib/database/entities';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Injectable()
export class GetSuppliersByBusinessAdapter
  implements GetSuppliersByBusinessServiceOutbound
{
  constructor(
    @InjectRepository(SupplierDbEntity)
    private readonly repository: Repository<SupplierDbEntity>,
  ) {}

  async getSuppliersByBusiness(businessId: number): Promise<SupplierEntity[]> {
    const result = await this.repository.find({
      relations: ['createdBy', 'updatedBy'],
      where: { business: { id: businessId } },
    });
    return result.map((supplier) => ({
      ...supplier,
      createdBy: {
        firstName: supplier.createdBy.firstName,
        lastName: supplier.createdBy.lastName,
      },
      updatedBy: supplier.updatedBy && {
        firstName: supplier.updatedBy.firstName,
        lastName: supplier.updatedBy.lastName,
      },
    }));
  }
}
