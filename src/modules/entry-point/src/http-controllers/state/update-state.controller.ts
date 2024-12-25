import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiExceptionHandler } from '../../decorators';
import { UpdateStateService } from '@/core-lib/core/application/services/state';
import { EntityEnum, EntityStateEnum } from '@/core-lib/core/models/entities';

@Controller(':entityType/:entityId/state')
export class UpdateStateController {
  constructor(
    @Inject(UpdateStateService)
    private readonly updateStateService: UpdateStateService,
  ) {}

  @Patch()
  @ApiExceptionHandler()
  async updateState(
    @Param('entityType') entity: EntityEnum,
    @Param('entityId', ParseIntPipe) entityId: number,
    @Body('state') state: EntityStateEnum,
  ): Promise<{ success: boolean }> {
    const success = await this.updateStateService.updateState(
      entityId,
      entity,
      state,
    );

    return { success };
  }
}
