import { Injectable } from '@nestjs/common';
import { GetLatestProductsServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { ProductEntity } from '@/inventory-lib/core/model/entities';

@Injectable()
export class GetLatestProductsAdapter
  implements GetLatestProductsServiceOutbound
{
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async getLatestProducts(
    businessId: number,
    limit: number,
  ): Promise<ProductEntity[]> {
    return this.repository.find({
      where: { business: { id: businessId } },
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
