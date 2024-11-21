import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerModule } from './modules/entry-point/src/module/api-controller.module';

@Module({
  imports: [ApiControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
