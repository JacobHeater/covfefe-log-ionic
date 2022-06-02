type RepositoryFilter<T extends () => T> = { [key in keyof T]: T[key] };

export abstract class RepositoryBase<T extends () => T> {
  abstract findOneAsync(id: string): Promise<T>;
  abstract findManyAsync(filter: RepositoryFilter<T>): Promise<T[]>;
  abstract findAllAsync(): Promise<T[]>;
  abstract insertOneAsync(entity: T): Promise<T>;
  abstract insertManyAsync(entities: T[]): Promise<T[]>;
  abstract updateOneAsync(id: string, entity: Partial<T>): Promise<T>;
  abstract updateManyAsync(filter: RepositoryFilter<T>, entity: Partial<T>): Promise<T[]>;
  abstract deleteOneAsync(id: string): Promise<boolean>;
  abstract deleteManyAsync(id: string): Promise<boolean>;
}
