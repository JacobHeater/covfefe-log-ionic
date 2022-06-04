import { Injectable } from '@angular/core';
import { DistanceUnit } from 'src/app/models/scales/distance-unit';
import { Crop } from '../../../models/crop/crop';
import { PouchRepositoryBase } from '../pouch-repository-base';

@Injectable({
  providedIn: 'root',
})
export class CropRepository extends PouchRepositoryBase<Crop> {
  protected schemaName(): string {
    return 'Crops';
  }

  protected entityFactory(): new () => Crop {
    return Crop;
  }
}
