import { Injectable } from '@nestjs/common';
import { GetBestSellingProductsServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { BestSellerEntity } from '@/dashboard-lib/core/models/entities';

@Injectable()
export class GetBestSellingProductsAdapter
  implements GetBestSellingProductsServiceOutbound
{
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly productsRepository: Repository<ProductsDbEntity>,
  ) {}

  async getBestSellingProducts(
    businessId: string,
    limit: number,
  ): Promise<BestSellerEntity[]> {
    const query = `
        SELECT p.id             AS product_id,
               p.name           AS product_name,
               SUM(oi.quantity) AS total_sold
        FROM products p
                 JOIN order_items oi ON p.id = oi.product_id
                 JOIN orders o ON oi.order_id = o.id
        WHERE o.created_at >= DATE('now', '-30 days') -- Last 30 days 
          AND o.business_id = $1
        GROUP BY p.id
        ORDER BY total_sold DESC
        LIMIT $2
    `;
    const result = await this.productsRepository.query(query, [
      businessId,
      limit,
    ]);
    return result.map((row) => ({
      productId: row.product_id,
      productName: row.product_name,
      totalSold: row.total_sold,
    }));
  }
}
