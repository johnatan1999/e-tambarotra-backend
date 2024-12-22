import { Injectable } from '@nestjs/common';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDbEntity } from '@/infrastructure-lib/database/entities';
import { RegistrationServiceOutbound } from '@/auth-lib/core/services/outbounds/registration';
import { RegistrationOutput } from '@/auth-lib/core/models/output';
import { CoreException } from '@/core-lib/core/exceptions';

@Injectable()
export class RegistrationAdapter implements RegistrationServiceOutbound {
  constructor(
    @InjectRepository(UserDbEntity)
    private readonly userRepository: Repository<UserDbEntity>,
  ) {}

  async register(input: RegistrationInput): Promise<RegistrationOutput> {
    const existingUser = await this.userRepository.findOne({
      where: { username: input.username, email: input.email },
    });

    if (existingUser) {
      throw new CoreException('Username or email already exists.');
    }
    const user = this.userRepository.create({
      username: input.username,
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      role: input.role,
      password: input.password,
    });
    const newUser = await this.userRepository.save(user);
    return {
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      role: newUser.role,
      username: newUser.username,
    };
  }
}
