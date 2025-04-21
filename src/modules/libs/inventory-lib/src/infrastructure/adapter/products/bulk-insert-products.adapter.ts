import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { BulkInsertProductsServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';

@Injectable()
export class BulkInsertProductsAdapter
  implements BulkInsertProductsServiceOutbound
{
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async createProducts(products: ProductInput[]): Promise<void> {
    const entities = products.map((product) =>
      this.repository.create({
        ...product,
      }),
    );
    await this.repository.save(entities);
  }
}
