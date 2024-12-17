import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { RegistrationService } from '@/auth-lib/application/services/registration';
import { ApiExceptionHandler } from '../../decorators';

@Controller('auth')
export class RegistrationController {
  constructor(
    @Inject(RegistrationService)
    private readonly service: RegistrationService,
  ) {}

  @Post('register')
  @ApiExceptionHandler()
  async register(@Body() input: RegistrationInput) {
    return this.service.register(input);
  }
}
