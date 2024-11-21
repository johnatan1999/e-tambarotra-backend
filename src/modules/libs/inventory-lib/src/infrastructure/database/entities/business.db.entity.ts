import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserDbEntity } from '@/inventory-lib/infrastructure/database/entities/users.db.entity';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities/products.db.entity';

@Entity('business')
export class BusinessDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contactEmail: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone: string;

  @ManyToOne(() => UserDbEntity, (user) => user.businesses, { nullable: false })
  @JoinColumn({ name: 'owner_id' })
  owner: UserDbEntity;

  @OneToMany(() => ProductsDbEntity, (product) => product.business)
  products: ProductsDbEntity[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
