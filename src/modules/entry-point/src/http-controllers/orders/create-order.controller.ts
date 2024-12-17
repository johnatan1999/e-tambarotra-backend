import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateOrderService } from '@/sales-lib/application/services/orders';
import { OrderInput } from '@/sales-lib/core/models/inputs';
import { ApiExceptionHandler } from '../../decorators';

@Controller('/orders')
export class CreateOrderController {
  constructor(
    @Inject(CreateOrderService)
    private readonly service: CreateOrderService,
  ) {}

  @Post()
  @ApiExceptionHandler()
  createOrder(@Body() orderDetails: OrderInput) {
    return this.service.createOrder(orderDetails);
  }
}
