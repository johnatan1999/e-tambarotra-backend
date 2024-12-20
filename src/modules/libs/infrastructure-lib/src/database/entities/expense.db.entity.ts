import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities/business.db.entity';
import { UserDbEntity } from '@/infrastructure-lib/database/entities/users.db.entity';

@Entity('expenses')
export class ExpenseDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  category: string; // Optional, e.g., "Office Supplies", "Travel"

  @ManyToOne(() => BusinessDbEntity, (business) => business.id, {
    nullable: false,
    eager: true,
  })
  business: BusinessDbEntity;

  @ManyToOne(() => UserDbEntity, (user) => user.id, {
    nullable: false,
    eager: true,
  })
  registeredBy: UserDbEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
