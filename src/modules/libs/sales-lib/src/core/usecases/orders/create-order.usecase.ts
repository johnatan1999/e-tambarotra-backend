import { CreateOrderServiceInbound } from '@/sales-lib/core/services/inbounds/orders';
import { CreateOrderServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { OrderInput } from '@/sales-lib/core/models/inputs/order.input';
import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';
import { ProductQuantityValidator } from '@/core-lib/core/validator/product';
import { ProductOutOfStockException } from '@/core-lib/core/exceptions';
import { UpdateProductStockServiceOutbound } from '@/sales-lib/core/services/outbounds/products';

export class CreateOrderUseCase implements CreateOrderServiceInbound {
  constructor(
    private readonly outbound: CreateOrderServiceOutbound,
    private readonly productStockOutbound: UpdateProductStockServiceOutbound,
    private readonly productValidator: ProductQuantityValidator,
  ) {}

  async createOrder(orderDetails: OrderInput): Promise<OrderEntity> {
    for (const item of orderDetails.items) {
      const available = await this.productValidator.quantityAvailable(
        item.product.id,
        item.quantity,
      );
      if (!available) {
        throw new ProductOutOfStockException(
          'Product quantity is not available',
          item.product.id,
        );
      }
    }
    for (const item of orderDetails.items) {
      await this.productStockOutbound.updateStock(
        item.product.id,
        -item.quantity,
      );
    }
    return this.outbound.createOrder(orderDetails);
  }
}
