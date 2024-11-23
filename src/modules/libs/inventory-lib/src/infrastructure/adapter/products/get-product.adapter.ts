import { GetProductServiceOutbound } from '@/inventory-lib/core/services/outbound/products';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class GetProductAdapter implements GetProductServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  getProductsByBusiness(businessId: number): Promise<ProductEntity[]> {
    return this.repository.find({ where: { business: { id: businessId } } });
  }
}
