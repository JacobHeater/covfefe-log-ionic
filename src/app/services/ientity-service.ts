import { ModelBase } from '../models/model-base';

export interface IEntityService<T extends ModelBase> {
  addNewEntityAsync(item: T): Promise<T>;
  lookupEntityById(id: string): Promise<T>;
  deleteEntity(entity: T): Promise<boolean>;
}
