import { Provider } from '@nestjs/common';
import { CREATE_SUPPLIER_SERVICE_INBOUND } from '@/purchase-lib/core/services/inbounds/supplier';
import { CreateSupplierAdapter } from '@/purchase-lib/infrastructure/adapter/supplier';
import { CreateSupplierServiceOutbound } from '@/purchase-lib/core/services/outbounds/supplier';
import { CreateSupplierUseCase } from '@/purchase-lib/core/usecases/supplier';
import { UserSessionAdapter } from '@/auth-lib/infrastructure/adapter/login';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';

export const SupplierProvider: Provider[] = [
  {
    provide: CREATE_SUPPLIER_SERVICE_INBOUND,
    inject: [CreateSupplierAdapter, UserSessionAdapter],
    useFactory(
      createSupplierAdapter: CreateSupplierServiceOutbound,
      userSessionAdapter: UserSessionServiceOutbound,
    ) {
      return new CreateSupplierUseCase(
        createSupplierAdapter,
        userSessionAdapter,
      );
    },
  },
];
