import { Injectable } from '@angular/core';
import { ModelBase } from '../models/model-base';

type RepositoryFilter<T> = { [key in keyof T]: T[key] };

@Injectable({
  providedIn: 'root',
})
export abstract class RepositoryBase<T extends ModelBase> {
  abstract findOneAsync(id: string): Promise<T>;
  abstract findManyAsync(filter: RepositoryFilter<T>): Promise<T[]>;
  abstract findAllAsync(): Promise<T[]>;
  abstract insertOneAsync(entity: T): Promise<T>;
  abstract insertManyAsync(entities: T[]): Promise<T[]>;
  abstract updateOneAsync(id: string, entity: Partial<T>): Promise<T>;
  abstract updateManyAsync(
    filter: RepositoryFilter<T>,
    entity: Partial<T>
  ): Promise<T[]>;
  abstract deleteOneAsync(entity: T): Promise<boolean>;
  abstract deleteManyAsync(id: string): Promise<boolean>;
}
