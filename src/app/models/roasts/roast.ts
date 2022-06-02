import { Coffee } from '../coffee/coffee';
import { TemperatureUnit } from '../scales/temperature-unit';

export class Roast {
  static schema = {
    name: 'Roast',
    properties: {
      _id: 'objectId',
      coffee: 'Coffee',
      date: 'date',
      temperature: 'int',
      temperatureUnit: 'string',
      totalRoastTimeSeconds: 'int',
    }
  };

  _id = '';
  coffee: Coffee;
  date: Date;
  temperature = 0;
  temperatureUnit = TemperatureUnit.fahrenheit;
  totalRoastTimeSeconds = 0;
}
