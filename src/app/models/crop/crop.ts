import { ModelBase } from '../model-base';
import { DistanceUnit } from '../scales/distance-unit';

export class Crop extends ModelBase {
  name = '';
  origin = '';
  year = 0;
  altitude = 0;
  altitudeUnit = DistanceUnit.feet;
}
