import { Controller, Get, Inject, Param, Res } from '@nestjs/common';
import { GetOrdersByBusinessService } from '@/sales-lib/application/services/orders';
import { GetOrdersByBusinessOutput } from '@/sales-lib/application/models/output';
import { UserAccount } from '../../decorators/user-account.decorator';
import { AccountEntity } from '@/auth-lib/core/models/entities';

@Controller('business')
export class GetBusinessOrdersController {
  constructor(
    @Inject(GetOrdersByBusinessService)
    private readonly service: GetOrdersByBusinessService,
  ) {}

  @Get(':businessId/orders')
  async getOrdersByBusiness(
    @Param('businessId') businessId: string,
    @UserAccount() account: AccountEntity,
    @Res() res: any,
  ): Promise<GetOrdersByBusinessOutput> {
    const orders = await this.service.getOrdersByBusiness(businessId);
    return res.status(200).json(orders);
  }
}
