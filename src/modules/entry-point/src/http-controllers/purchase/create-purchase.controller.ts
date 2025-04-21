import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePurchaseService } from '@/purchase-lib/application/services/purchase';
import { CreatePurchaseInput } from '@/purchase-lib/core/models/inputs';

@Controller('/purchase')
export class CreatePurchaseController {
  constructor(
    @Inject(CreatePurchaseService)
    private readonly service: CreatePurchaseService,
  ) {}

  @Post()
  create(@Body() input: CreatePurchaseInput) {
    return this.service.createPurchase(input);
  }
}
