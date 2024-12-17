import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { ProductQuantityValidator } from '@/core-lib/core/validator/product';

@Injectable()
export class ProductQuantityValidatorService
  implements ProductQuantityValidator
{
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly productsRepository: Repository<ProductsDbEntity>,
  ) {}

  public async quantityAvailable(
    productId: number,
    quantity: number,
  ): Promise<boolean> {
    const product = await this.productsRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      return false;
    }

    return product.availableStock >= quantity;
  }
}
