import { Provider } from '@nestjs/common';
import {
  CREATE_SUPPLIER_SERVICE_INBOUND,
  GET_SUPPLIERS_BY_BUSINESS_SERVICE_INBOUND,
} from '@/purchase-lib/core/services/inbounds/supplier';
import {
  CreateSupplierAdapter,
  GetSuppliersByBusinessAdapter,
} from '@/purchase-lib/infrastructure/adapter/supplier';
import {
  CreateSupplierServiceOutbound,
  GetSuppliersByBusinessServiceOutbound,
} from '@/purchase-lib/core/services/outbounds/supplier';
import { CreateSupplierUseCase } from '@/purchase-lib/core/usecases/supplier';
import { UserSessionAdapter } from '@/auth-lib/infrastructure/adapter/login';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { GetSuppliersByBusinessUseCase } from '@/purchase-lib/core/usecases/supplier/get-suppliers-by-business.usecase';

export const SupplierProvider: Provider[] = [
  {
    provide: GET_SUPPLIERS_BY_BUSINESS_SERVICE_INBOUND,
    inject: [GetSuppliersByBusinessAdapter, UserSessionAdapter],
    useFactory(
      outbound: GetSuppliersByBusinessServiceOutbound,
      userSessionService: UserSessionServiceOutbound,
    ) {
      return new GetSuppliersByBusinessUseCase(outbound, userSessionService);
    },
  },
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
