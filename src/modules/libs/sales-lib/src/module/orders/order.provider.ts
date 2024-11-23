import { Provider } from '@nestjs/common';
import { CreateOrderAdapter } from '@/sales-lib/infrastructure/adapter/orders/create-order.adapter';
import { CreateOrderUsecase } from '@/sales-lib/core/usecases/orders';

const OrderProvider: Provider[] = [
  {
    inject: [CreateOrderAdapter],
    provide: 'CREATE_ORDER_SERVICE_INBOUND',
    useFactory: (outbound: CreateOrderAdapter) => {
      return new CreateOrderUsecase(outbound);
    },
  },
];

export default OrderProvider;
