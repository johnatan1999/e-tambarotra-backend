import { Body, Controller, Post } from '@nestjs/common';
import { LoginInput } from '@/auth-lib/core/models/inputs';
import { LoginService } from '@/auth-lib/application/services/login';
import { ApiExceptionHandler } from '../../decorators';
import { PublicApi } from '../../decorators/public-api.decorator';

@Controller('auth/login')
@PublicApi()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiExceptionHandler()
  async login(@Body() input: LoginInput) {
    return this.loginService.login(input);
  }
}
