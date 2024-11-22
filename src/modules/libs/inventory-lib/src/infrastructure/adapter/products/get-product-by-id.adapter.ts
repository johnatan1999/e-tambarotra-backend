import { Injectable } from '@nestjs/common';
import { GetProductByIdServiceOutbound } from '@/inventory-lib/core/services/outbound/products/get-product-by-id.service.outbound';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities';

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
