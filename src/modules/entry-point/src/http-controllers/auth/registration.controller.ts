import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { RegistrationService } from '@/auth-lib/application/services/registration';
import { ApiExceptionHandler } from '../../decorators';
import { PublicApi } from '../../decorators/public-api.decorator';

@Controller('auth')
export class RegistrationController {
  constructor(
    @Inject(RegistrationService)
    private readonly service: RegistrationService,
  ) {}

  @Post('register')
  @ApiExceptionHandler()
  @PublicApi()
  async register(@Body() input: RegistrationInput) {
    const user = await this.service.register(input);
    return { success: !!user };
  }
}
