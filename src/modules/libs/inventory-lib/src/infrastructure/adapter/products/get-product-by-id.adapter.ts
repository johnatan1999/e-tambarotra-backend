import { Injectable } from '@nestjs/common';
import { GetProductByIdServiceOutbound } from '@/inventory-lib/core/services/outbounds/products/get-product-by-id.service.outbound';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class GetProductByIdAdapter implements GetProductByIdServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async getProductById(id: number): Promise<ProductEntity> {
    return this.repository.findOne({ where: { id } });
  }
}
