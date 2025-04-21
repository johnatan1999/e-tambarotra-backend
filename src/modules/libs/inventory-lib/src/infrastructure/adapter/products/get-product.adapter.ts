import { GetProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { EntityStateEnum } from '@/core-lib/core/models/entities';

@Injectable()
export class GetProductAdapter implements GetProductServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  getProductsByBusiness(businessId: number): Promise<ProductEntity[]> {
    return this.repository.find({
      where: { business: { id: businessId }, state: EntityStateEnum.ACTIVE },
      order: { createdAt: 'DESC' },
    });
  }
}
