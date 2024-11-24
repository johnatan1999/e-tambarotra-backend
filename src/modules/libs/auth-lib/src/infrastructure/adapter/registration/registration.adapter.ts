import { Injectable } from '@nestjs/common';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDbEntity } from '@/infrastructure-lib/database/entities';
import { RegistrationServiceOutbound } from '@/auth-lib/core/services/outbounds/registration';
import { RegistrationOutput } from '@/auth-lib/core/models/output';

@Injectable()
export class RegistrationAdapter implements RegistrationServiceOutbound {
  constructor(
    @InjectRepository(UserDbEntity)
    private readonly userRepository: Repository<UserDbEntity>,
  ) {}

  async register(input: RegistrationInput): Promise<RegistrationOutput> {
    const user = this.userRepository.create({
      ...input,
    });
    return this.userRepository.save(user);
  }
}
