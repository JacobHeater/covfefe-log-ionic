import { Injectable } from '@angular/core';
import { Roast } from 'src/app/models/roasts/roast';
import { RoastRepository } from 'src/app/repositories/pouch/roast/roast-repository';
import { IEntityService } from '../ientity-service';

@Injectable({
  providedIn: 'root',
})
export class RoastService implements IEntityService<Roast> {
  constructor(private roastRepo: RoastRepository) {}

  deleteEntity(entity: Roast): Promise<boolean> {
    return this.roastRepo.deleteOneAsync(entity);
  }

  lookupEntityById(id: string): Promise<Roast> {
    return this.roastRepo.findOneAsync(id);
  }

  addNewEntityAsync(item: Roast): Promise<Roast> {
    return this.roastRepo.insertOneAsync(item);
  }

  findAllRoastsAsync(): Promise<Roast[]> {
    return this.roastRepo.findAllAsync();
  }
}
