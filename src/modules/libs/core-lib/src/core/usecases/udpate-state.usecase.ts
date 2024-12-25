import { UpdateStateServiceInbound } from '@/core-lib/core/services/inbounds';
import { UpdateStateServiceOutbound } from '@/core-lib/core/services/outbounds';
import { EntityEnum, EntityStateEnum } from '@/core-lib/core/models/entities';

export class UpdateStateUseCase implements UpdateStateServiceInbound {
  constructor(
    private readonly outbounds: Record<EntityEnum, UpdateStateServiceOutbound>,
  ) {}

  updateState(
    entityId: number,
    entity: EntityEnum,
    state: EntityStateEnum,
  ): Promise<boolean> {
    const outbound = this.outbounds[entity];
    return outbound.updateState(entityId, state);
  }
}
