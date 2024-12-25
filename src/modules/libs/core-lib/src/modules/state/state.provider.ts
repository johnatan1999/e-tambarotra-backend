import { Provider } from '@nestjs/common';
import { UPDATE_STATE_SERVICE_INBOUND } from '@/core-lib/core/services/inbounds';
import { UpdateProductStateAdapter } from '@/core-lib/infrastructure/adapter/state';
import { UpdateStateUseCase } from '@/core-lib/core/usecases';
import { EntityEnum } from '@/core-lib/core/models/entities';
import { UpdateStateServiceOutbound } from '@/core-lib/core/services/outbounds';

export const stateProvider: Provider[] = [
  {
    provide: UPDATE_STATE_SERVICE_INBOUND,
    inject: [UpdateProductStateAdapter],
    useFactory: (productStateAdapter: UpdateProductStateAdapter) => {
      const outbounds: Record<EntityEnum, UpdateStateServiceOutbound> = {
        [EntityEnum.PRODUCT]: productStateAdapter,
      };
      return new UpdateStateUseCase(outbounds);
    },
  },
];
