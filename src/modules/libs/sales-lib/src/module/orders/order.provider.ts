import { Provider } from '@nestjs/common';
import { CreateOrderAdapter } from '@/sales-lib/infrastructure/adapter/orders/create-order.adapter';
import {
  CreateOrderUsecase,
  GetOrdersByBusinessUseCase,
} from '@/sales-lib/core/usecases/orders';
import { GetOrdersByBusinessAdapter } from '@/sales-lib/infrastructure/adapter/orders';
import {
  CREATE_ORDER_SERVICE_INBOUND,
  GET_ORDERS_BY_BUSINESS_SERVICE_INBOUND,
} from '@/sales-lib/core/services/inbounds/orders';

const OrderProvider: Provider[] = [
  {
    inject: [GetOrdersByBusinessAdapter],
    provide: GET_ORDERS_BY_BUSINESS_SERVICE_INBOUND,
    useFactory: (outbound: GetOrdersByBusinessAdapter) => {
      return new GetOrdersByBusinessUseCase(outbound);
    },
  },
  {
    inject: [CreateOrderAdapter],
    provide: CREATE_ORDER_SERVICE_INBOUND,
    useFactory: (outbound: CreateOrderAdapter) => {
      return new CreateOrderUsecase(outbound);
    },
  },
];

export default OrderProvider;
