import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { ProductValidator } from '@/core-lib/core/validator/product';

@Injectable()
export class ProductValidatorService implements ProductValidator {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async productExists(productId: number): Promise<boolean> {
    const product = await this.repository.findOne({ where: { id: productId } });
    return !!product;
  }
}
