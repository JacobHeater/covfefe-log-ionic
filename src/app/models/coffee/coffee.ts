import { DistanceUnit } from '../scales/distance-unit';

export class Coffee {
  static schema = {
    name: 'Coffee',
    properties: {
      _id: 'objectId',
      name: 'string',
      origin: 'string',
      year: 'int',
      altitude: 'int',
      altitudeUnit: 'string',
    },
    primaryKey: '_id',
  };

  _id = '';
  name = '';
  origin = '';
  year = 0;
  altitude = 0;
  altitudeUnit = DistanceUnit.feet;
}
