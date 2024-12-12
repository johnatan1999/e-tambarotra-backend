import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GetOrderByIdService } from '@/sales-lib/application/services/orders/get-order-by-id.service';

@Controller('orders')
export class GetOrderByIdController {
  constructor(
    @Inject(GetOrderByIdService)
    private readonly service: GetOrderByIdService,
  ) {}

  /**
   * @description
   * Retrieves an order by ID.
   *
   * @route GET /orders/:id
   * @param {string} id - The ID of the order to retrieve.
   * @returns {Promise<OrderEntity>} - A promise that resolves to the retrieved order entity.
   */
  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return await this.service.getOrderById(id);
  }
}
