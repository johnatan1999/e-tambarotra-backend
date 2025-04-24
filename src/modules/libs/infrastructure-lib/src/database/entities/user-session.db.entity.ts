import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserDbEntity } from '@/infrastructure-lib/database/entities/users.db.entity';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities/business.db.entity';

@Entity('user_session')
export class UserSessionDbEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => UserDbEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserDbEntity;

  @ManyToOne(() => BusinessDbEntity, (business) => business.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'current_business_id' })
  currentBusiness: BusinessDbEntity | null;

  @Column({ name: 'ip_address', type: 'varchar', length: 45 })
  ipAddress: string;

  @Column({ name: 'user_agent', type: 'varchar', length: 255 })
  userAgent: string;

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
