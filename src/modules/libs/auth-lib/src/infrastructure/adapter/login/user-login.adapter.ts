import { LoginServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { UserEntity } from '@/auth-lib/core/models/entities/user.entity';
import { UserDbEntity } from '@/infrastructure-lib/database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class UserLoginAdapter implements LoginServiceOutbound {
  constructor(
    @InjectRepository(UserDbEntity)
    private readonly repository: Repository<UserDbEntity>,
  ) {}

  getUserByEmailOrUsername(email: string): Promise<UserEntity> {
    return this.repository.findOne({
      where: [{ email }, { username: email }],
      select: [
        'email',
        'password',
        'id',
        'firstName',
        'lastName',
        'role',
        'username',
      ],
    });
  }
}
