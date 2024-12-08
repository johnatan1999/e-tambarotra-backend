import { Injectable } from '@nestjs/common';
import { UpdateProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products/update-product.service.outbound';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';

@Injectable()
export class UpdateProductAdapter implements UpdateProductServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async updateProduct(id: string, input: ProductInput): Promise<ProductEntity> {
    const entity = this.repository.create({
      ...input,
    });
    return this.repository.update(id, entity);
  }
}
