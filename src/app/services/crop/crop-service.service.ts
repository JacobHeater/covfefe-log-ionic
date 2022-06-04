import { Injectable } from '@angular/core';
import { Crop } from 'src/app/models/crop/crop';
import { CropRepository } from 'src/app/repositories/pouch/crop/crop-repository';
import { IEntityService } from '../ientity-service';

@Injectable({
  providedIn: 'root',
})
export class CropService implements IEntityService<Crop> {
  constructor(private cropRepo: CropRepository) {}

  deleteEntity(entity: Crop): Promise<boolean> {
    return this.cropRepo.deleteOneAsync(entity);
  }

  lookupEntityById(id: string): Promise<Crop> {
    return this.cropRepo.findOneAsync(id);
  }

  addNewEntityAsync(item: Crop): Promise<Crop> {
    return this.cropRepo.insertOneAsync(item);
  }

  fetchAllCropsAsync() {
    return this.cropRepo.findAllAsync();
  }
}
