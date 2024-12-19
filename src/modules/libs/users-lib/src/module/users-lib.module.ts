import { Module } from '@nestjs/common';
import { BusinessModule } from '@/users-lib/module/business';

@Module({
  imports: [BusinessModule],
  exports: [BusinessModule],
})
export class UsersLibModule {}
