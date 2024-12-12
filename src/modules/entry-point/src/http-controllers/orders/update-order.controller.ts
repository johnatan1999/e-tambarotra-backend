import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UpdateOrderService } from '@/sales-lib/application/services/orders';
import { OrderInput } from '@/sales-lib/core/models/inputs';
import { OrderEntity } from '@/sales-lib/core/models/entities';

/**
 * Controller for updating an order.
 */
@Controller('orders')
export class UpdateOrderController {
  /**
   * Constructor for UpdateOrderController.
   *
   * @param {UpdateOrderService} service - Service for updating orders.
   */
  constructor(
    @Inject(UpdateOrderService)
    private readonly service: UpdateOrderService,
  ) {}

  /**
   * Updates an order by its ID.
   *
   * @param {string} id - The ID of the order to update.
   * @param {OrderInput} orderDetails - The details of the order to update.
   * @returns {Promise<void>}
   */
  @Put(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() orderDetails: OrderInput,
  ): Promise<OrderEntity> {
    return this.service.updateOrder(id, orderDetails);
  }
}