import { EntityStateEnum } from '@/core-lib/core/models/entities';

export interface UpdateStateServiceOutbound {
  /**
   * Updates the state of a given entity.
   *
   * @param entityId
   * @param {EntityStateEnum} state - The new state to which the entity should be updated.
   * @returns {Promise<boolean>} - A promise that resolves to true if the update was successful, otherwise false.
   */
  updateState(entityId: number, state: EntityStateEnum): Promise<boolean>;
}
