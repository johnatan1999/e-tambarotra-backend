import { Injectable } from '@nestjs/common';
import { TransactionalRunner } from '@/core-lib/core/services/transaction/transaction-runner';
import { DataSource } from 'typeorm';

@Injectable()
export class TypeOrmTransactionalRunner implements TransactionalRunner {
  constructor(private readonly dataSource: DataSource) {}

  async runInTransaction<T>(work: () => Promise<T>): Promise<T> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await work();
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
