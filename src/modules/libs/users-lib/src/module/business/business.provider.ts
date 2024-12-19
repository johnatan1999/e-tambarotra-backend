import { Provider } from '@nestjs/common';
import { CREATE_BUSINESS_SERVICE_INBOUND } from '@/users-lib/core/services/inbounds/business';
import { CreateBusinessAdapter } from '@/users-lib/infrastructure/adapter/business';
import { CreateBusinessUseCase } from '@/users-lib/core/usecases/business';

export const businessProvider: Provider[] = [
  {
    provide: CREATE_BUSINESS_SERVICE_INBOUND,
    inject: [CreateBusinessAdapter],
    useFactory: (outbound: CreateBusinessAdapter) => {
      return new CreateBusinessUseCase(outbound);
    },
  },
];
