import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProductStockServiceOutbound } from '@/sales-lib/core/services/outbounds/products';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class UpdateProductStockAdapter
  implements UpdateProductStockServiceOutbound
{
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async updateStock(productId: number, quantity: number): Promise<void> {
    const product = await this.repository.findOne({ where: { id: productId } });

    if (!product) {
      throw new Error('Product not found.');
    }

    // If quantity is negative, ensure we don't reduce stock below 0
    if (quantity < 0 && product.availableStock + quantity < 0) {
      throw new Error(
        `Insufficient stock. Available: ${product.availableStock}`,
      );
    }

    // Update the stock based on the quantity (positive or negative)
    product.availableStock += quantity;

    await this.repository.save(product);
  }
}
