import { Injectable } from '@angular/core';
import { DistanceUnit } from 'src/app/models/scales/distance-unit';
import { TemperatureUnit } from 'src/app/models/scales/temperature-unit';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  getTemperatureUnits() {
    return [
      TemperatureUnit.celsius.toString(),
      TemperatureUnit.fahrenheit.toString(),
    ];
  }

  convertStringToTemperatureUnit(str: string): TemperatureUnit {
    switch (str) {
      case TemperatureUnit.celsius.toString():
        return TemperatureUnit.celsius;
      case TemperatureUnit.fahrenheit.toString():
        return TemperatureUnit.fahrenheit;
      default:
        throw new Error(`Could not parse TemperatureUnit for input: ${str}`);
    }
  }

  getDistanceUnits() {
    return [
      DistanceUnit.feet.toString(),
      DistanceUnit.meters.toString(),
    ];
  }

  convertStringToDistanceUnit(str: string): DistanceUnit {
    switch (str) {
      case DistanceUnit.feet.toString():
        return DistanceUnit.feet;
      case DistanceUnit.meters.toString():
        return DistanceUnit.meters;
      default:
        throw new Error(`Could not parse DistanceUnit for input: ${str}`);
    }
  }
}
