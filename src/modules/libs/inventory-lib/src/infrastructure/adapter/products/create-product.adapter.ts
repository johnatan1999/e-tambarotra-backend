import { CreateProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';
import { Injectable } from '@nestjs/common';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateProductAdapter implements CreateProductServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  createProduct(product: ProductInput): Promise<ProductEntity> {
    const entity = this.repository.create({
      ...product,
    });
    return this.repository.save(entity);
  }
}
