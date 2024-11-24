import { Provider } from '@nestjs/common';
import { CreateCustomerAdapter } from '@/sales-lib/infrastructure/adapter/customers';
import { CREATE_CUSTOMER_SERVICE_INBOUND } from '@/sales-lib/core/services/inbounds/customers';
import { CreateCustomerUseCase } from '@/sales-lib/core/usecases/customers';

const CustomerProvider: Provider[] = [
  {
    inject: [CreateCustomerAdapter],
    provide: CREATE_CUSTOMER_SERVICE_INBOUND,
    useFactory: (outbound: CreateCustomerAdapter) => {
      return new CreateCustomerUseCase(outbound);
    },
  },
];

export default CustomerProvider;
