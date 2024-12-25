import { Inject, Injectable } from '@nestjs/common';
import {
  UPDATE_STATE_SERVICE_INBOUND,
  UpdateStateServiceInbound,
} from '@/core-lib/core/services/inbounds';
import { EntityEnum, EntityStateEnum } from '@/core-lib/core/models/entities';

@Injectable()
export class UpdateStateService {
  constructor(
    @Inject(UPDATE_STATE_SERVICE_INBOUND)
    private readonly updateStateServiceInbound: UpdateStateServiceInbound,
  ) {}

  /**
   * Updates the state of the given entity.
   *
   * @param entityId - The id of the entity to be updated.
   * @param entityEnum - The type of entity to be updated.
   * @param stateEnum - The new state to which the entity should be updated.
   * @returns A promise that resolves to void when the update is completed.
   */
  async updateState(
    entityId: number,
    entityEnum: EntityEnum,
    stateEnum: EntityStateEnum,
  ): Promise<boolean> {
    return this.updateStateServiceInbound.updateState(
      entityId,
      entityEnum,
      stateEnum,
    );
  }
}
