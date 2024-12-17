import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBusinessServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class UserBusinessAdapter implements UserBusinessServiceOutbound {
  constructor(
    @InjectRepository(BusinessDbEntity)
    private readonly repository: Repository<BusinessDbEntity>,
  ) {}

  async getUserBusinesses(userId: number): Promise<number[]> {
    const userBusinesses = await this.repository.find({
      where: { owner: { id: userId } },
      select: ['id'],
    });

    return userBusinesses.map((userBusiness) => userBusiness.id);
  }
}
