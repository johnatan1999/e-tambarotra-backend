import { Injectable } from '@nestjs/common';
import { GetLatestOrdersServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDbEntity } from '@/infrastructure-lib/database/entities';
import { LatestOrderEntity } from '@/dashboard-lib/core/models/entities';

@Injectable()
export class GetLatestOrdersAdapter implements GetLatestOrdersServiceOutbound {
  constructor(
    @InjectRepository(OrderDbEntity)
    private readonly repository: Repository<OrderDbEntity>,
  ) {}

  async getLatestOrders(
    businessId: number,
    limit: number,
  ): Promise<LatestOrderEntity[]> {
    const query = `
        select o.id                               as order_id,
               oi.id                              as item_id,
               p.id                               as product_id,
               c.id                               as customer_id,
               p.name                             as product_name,
               c.first_name || ' ' || c.last_name as customer_name,
               o.status,
               oi.quantity,
               oi.unit_price,
               o.created_at                       as order_date
        from orders o
                 join order_items oi on o.id = oi.order_id
                 join customers c on o.customer_id = c.id
                 join products p on oi.product_id = p.id
        where o.business_id = $1
        order by o.created_at desc
        limit $2
    `;
    const queryResult = await this.repository.query(query, [businessId, limit]);
    const result = {};
    for (const row of queryResult) {
      if (!result[row.order_id]) {
        result[row.order_id] = {
          id: row.order_id,
          customer: {
            id: row.customer_id,
            name: row.customer_name,
          },
          status: row.status,
          items: [],
          createdAt: row.order_date,
        };
      }
      result[row.order_id].items.push({
        id: row.item_id,
        unitPrice: row.unit_price,
        quantity: row.quantity,
        product: {
          id: row.product_id,
          name: row.product_name,
        },
      });
    }
    return Object.values(result);
  }
}
