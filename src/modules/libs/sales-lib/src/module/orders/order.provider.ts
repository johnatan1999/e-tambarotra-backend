import { Provider } from '@nestjs/common';
import { CreateOrderAdapter } from '@/sales-lib/infrastructure/adapter/orders/create-order.adapter';
import {
  CreateOrderUsecase,
  GetOrderByIdUseCase,
  GetOrdersByBusinessUseCase,
  UpdateOrderUseCase,
} from '@/sales-lib/core/usecases/orders';
import {
  GetOrderByIdAdapter,
  GetOrdersByBusinessAdapter,
  UpdateOrderAdapter,
} from '@/sales-lib/infrastructure/adapter/orders';
import {
  CREATE_ORDER_SERVICE_INBOUND,
  GET_ORDER_BY_ID_SERVICE_INBOUND,
  GET_ORDERS_BY_BUSINESS_SERVICE_INBOUND,
  UPDATE_ORDER_SERVICE_INBOUND,
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
  {
    inject: [GetOrderByIdAdapter],
    provide: GET_ORDER_BY_ID_SERVICE_INBOUND,
    useFactory: (outbound: GetOrderByIdAdapter) => {
      return new GetOrderByIdUseCase(outbound);
    },
  },
  {
    inject: [UpdateOrderAdapter],
    provide: UPDATE_ORDER_SERVICE_INBOUND,
    useFactory: (outbound: UpdateOrderAdapter) => {
      return new UpdateOrderUseCase(outbound);
    },
  },
];

export default OrderProvider;
