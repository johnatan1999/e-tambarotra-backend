import { Provider } from '@nestjs/common';
import {
  CREATE_BUSINESS_SERVICE_INBOUND,
  GET_BUSINESSES_BY_USER_SERVICE_INBOUND,
} from '@/users-lib/core/services/inbounds/business';
import {
  CreateBusinessAdapter,
  GetBusinessesByUserAdapter,
} from '@/users-lib/infrastructure/adapter/business';
import {
  CreateBusinessUseCase,
  GetBusinessesByUserUseCase,
} from '@/users-lib/core/usecases/business';

export const businessProvider: Provider[] = [
  {
    provide: GET_BUSINESSES_BY_USER_SERVICE_INBOUND,
    inject: [GetBusinessesByUserAdapter],
    useFactory: (outbound: GetBusinessesByUserAdapter) => {
      return new GetBusinessesByUserUseCase(outbound);
    },
  },
  {
    provide: CREATE_BUSINESS_SERVICE_INBOUND,
    inject: [CreateBusinessAdapter],
    useFactory: (outbound: CreateBusinessAdapter) => {
      return new CreateBusinessUseCase(outbound);
    },
  },
];
