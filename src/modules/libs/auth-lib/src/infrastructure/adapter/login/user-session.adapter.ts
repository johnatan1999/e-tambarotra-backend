import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSessionDbEntity } from '@/infrastructure-lib/database/entities';
import { UserSessionEntity } from '@/auth-lib/core/models/entities';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';

@Injectable()
export class UserSessionAdapter implements UserSessionServiceOutbound {
  constructor(
    @InjectRepository(UserSessionDbEntity)
    private readonly repository: Repository<UserSessionDbEntity>,
  ) {}

  async getUserSession(userId: number): Promise<UserSessionEntity> {
    const session = await this.repository.findOne({
      where: { user: { id: userId } },
    });
    if (!session) {
      return null;
    }
    return {
      id: session.id,
      currentBusiness: {
        id: session.currentBusiness?.id,
        name: session.currentBusiness?.name,
      },
    };
  }
}
