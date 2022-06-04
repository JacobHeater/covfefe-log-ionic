import { Injectable } from '@angular/core';
import { Roast } from 'src/app/models/roasts/roast';
import { PouchRepositoryBase } from '../pouch-repository-base';

@Injectable({
  providedIn: 'root',
})
export class RoastRepository extends PouchRepositoryBase<Roast> {
  protected schemaName(): string {
    return 'Roasts';
  }
  protected entityFactory(): new () => Roast {
    return Roast;
  }
}
