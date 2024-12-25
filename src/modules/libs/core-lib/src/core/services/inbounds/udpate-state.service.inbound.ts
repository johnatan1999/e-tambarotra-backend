import { EntityEnum, EntityStateEnum } from '@/core-lib/core/models/entities';

export interface UpdateStateServiceInbound {
  /**
   * Updates the state of a given entity.
   *
   * @param entityId
   * @param {EntityEnum} entity - The entity whose state is to be updated.
   * @param {EntityStateEnum} state - The new state to which the entity should be updated.
   * @returns {Promise<boolean>} - A promise that resolves to true if the update was successful, otherwise false.
   */
  updateState(
    entityId: number,
    entity: EntityEnum,
    state: EntityStateEnum,
  ): Promise<boolean>;
}

export const UPDATE_STATE_SERVICE_INBOUND = 'UPDATE_STATE_SERVICE_INBOUND';
