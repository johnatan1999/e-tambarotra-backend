import { Injectable } from '@nestjs/common';
import { UpdateProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products/update-product.service.outbound';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';

@Injectable()
export class UpdateProductAdapter implements UpdateProductServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  updateProduct(id: string, input: Partial<ProductInput>): Promise<any> {
    const entity = this.repository.create({
      ...input,
    });
    return this.repository.update(id, entity);
  }
}
