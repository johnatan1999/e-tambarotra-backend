import { Module } from '@nestjs/common';
import { AuthModule } from '@/auth-lib/modules/auth';

@Module({
  imports: [AuthModule],
  exports: [AuthModule],
})
export class AuthLibModule {}
