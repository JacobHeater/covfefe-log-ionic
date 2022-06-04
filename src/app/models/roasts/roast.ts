import { Crop } from '../crop/crop';
import { ModelBase } from '../model-base';
import { TemperatureUnit } from '../scales/temperature-unit';

export class Roast extends ModelBase {
  crop: Crop;
  date: Date;
  temperature = 0;
  temperatureUnit = TemperatureUnit.fahrenheit;
  totalRoastTimeSeconds = 0;
  tastingNotes: string[] = [];

  get dateAsEnUsString(): string {
    return new Date(this.date).toLocaleDateString('en-US');
  }

  get roastTimeInMinutes(): number {
    return Math.round(this.totalRoastTimeSeconds / 60);
  }

  static newRoast(init: Partial<Roast>): Roast {
    return Object.assign(new Roast(), {
      ...init,
    });
  }
}
