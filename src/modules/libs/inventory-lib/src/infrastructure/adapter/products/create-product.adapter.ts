import { CreateProductServiceOutbound } from '@/inventory-lib/core/services/outbound/products';
import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { Injectable } from '@nestjs/common';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities';
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
