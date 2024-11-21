import { Module } from '@nestjs/common';
import * as Controllers from '../http-controllers';

@Module({
  controllers: Object.values(Controllers),
})
export class ApiControllerModule {}