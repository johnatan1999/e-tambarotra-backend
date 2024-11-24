import { Provider } from '@nestjs/common';
import {
  CreateCustomerAdapter,
  GetCustomersByBusinessAdapter,
} from '@/sales-lib/infrastructure/adapter/customers';
import {
  CREATE_CUSTOMER_SERVICE_INBOUND,
  GET_CUSTOMERS_BY_BUSINESS_SERVICE_INBOUND,
} from '@/sales-lib/core/services/inbounds/customers';
import {
  CreateCustomerUseCase,
  GetCustomersByBusinessUseCase,
} from '@/sales-lib/core/usecases/customers';

const CustomerProvider: Provider[] = [
  {
    inject: [CreateCustomerAdapter],
    provide: CREATE_CUSTOMER_SERVICE_INBOUND,
    useFactory: (outbound: CreateCustomerAdapter) => {
      return new CreateCustomerUseCase(outbound);
    },
  },
  {
    inject: [GetCustomersByBusinessAdapter],
    provide: GET_CUSTOMERS_BY_BUSINESS_SERVICE_INBOUND,
    useFactory: (outbound: GetCustomersByBusinessAdapter) => {
      return new GetCustomersByBusinessUseCase(outbound);
    },
  },
];

export default CustomerProvider;
