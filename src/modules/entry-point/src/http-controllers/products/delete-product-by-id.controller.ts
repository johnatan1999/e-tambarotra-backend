import {
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiExceptionHandler } from '../../decorators';
import { UpdateStateService } from '@/core-lib/core/application/services/state';
import { EntityEnum, EntityStateEnum } from '@/core-lib/core/models/entities';

@Controller()
export class DeleteProductByIdController {
  constructor(
    @Inject(UpdateStateService)
    private readonly updateStateService: UpdateStateService,
  ) {}

  @Delete('products/:entityId')
  @ApiExceptionHandler()
  async deleteProduct(
    @Param('entityId', ParseIntPipe) entityId: number,
  ): Promise<{ success: boolean }> {
    const success = await this.updateStateService.updateState(
      entityId,
      EntityEnum.PRODUCT,
      EntityStateEnum.DELETED,
    );

    return { success };
  }
}
