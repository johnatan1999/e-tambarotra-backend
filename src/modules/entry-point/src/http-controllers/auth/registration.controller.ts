import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { RegistrationService } from '@/auth-lib/application/services/registration';

@Controller('auth')
export class RegistrationController {
  constructor(
    @Inject(RegistrationService)
    private readonly service: RegistrationService,
  ) {}

  @Post('register')
  async register(@Body() input: RegistrationInput) {
    return this.service.register(input);
  }
}
