import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { GetTotalProfitServiceOutbound } from '@/dashboard-lib/core/services/outbounds';

@Injectable()
export class GetTotalProfitAdapter implements GetTotalProfitServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async getTotalProfit(businessId: number): Promise<number> {
    const query = `
        select products.id                   as product_id,
               products.name                 as product_name,
               (unit_price - purchase_price) as profit_per_product,
               quantity                      as order_quantity,
               orders.created_at             as order_date
        from orders
                 join order_items on orders.id = order_items.order_id
                 join products on order_items.product_id = products.id
        where products.business_id = $1;
    `;
    const result = await this.repository.query(query, [businessId]);
    let totalProfit = 0;
    for (const row of result) {
      const quantitySold = row.order_quantity;
      const profitPerProduct = row.profit_per_product;
      totalProfit += profitPerProduct * quantitySold;
    }
    return totalProfit;
  }
}
