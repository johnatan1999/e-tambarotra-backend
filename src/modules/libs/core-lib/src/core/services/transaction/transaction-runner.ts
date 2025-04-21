export interface TransactionalRunner {
  runInTransaction<T>(work: () => Promise<T>): Promise<T>;
}
