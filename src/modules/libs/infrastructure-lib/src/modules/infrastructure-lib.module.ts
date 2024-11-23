import {
  BusinessDbEntity,
  OrderDbEntity,
  OrderItemDbEntity,
  ProductsDbEntity,
  SalesDbEntity,
  StockReajustmentDbEntity,
  UserDbEntity,
} from '@/infrastructure-lib/database/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const entities = [
  ProductsDbEntity,
  BusinessDbEntity,
  UserDbEntity,
  SalesDbEntity,
  StockReajustmentDbEntity,
  OrderDbEntity,
  OrderItemDbEntity,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
})
export class InfrastructureLibModule {}
