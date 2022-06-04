import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Rx from 'rxjs';
import { Crop } from 'src/app/models/crop/crop';
import { Roast } from 'src/app/models/roasts/roast';
import { TemperatureUnit } from 'src/app/models/scales/temperature-unit';
import { CropService } from 'src/app/services/crop/crop-service.service';
import { RoastService } from 'src/app/services/roast/roast-service.service';
import { ScaleService } from 'src/app/services/scales/scale-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  crops = new Rx.Subject<Crop[]>();
  crop: string;
  date: Date;
  temperature: number;
  temperatureUnit: TemperatureUnit;
  roastTime: number;
  tastingNotes: string;

  constructor(
    private cropSvc: CropService,
    private scaleSvc: ScaleService,
    private roastSvc: RoastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateCrops();
  }

  async updateCrops() {
    this.crops.next(await this.cropSvc.fetchAllCropsAsync());
  }

  getTemperatureUnits() {
    return this.scaleSvc.getTemperatureUnits();
  }

  async createRoast() {
    await this.roastSvc.addNewEntityAsync(Roast.newRoast({
      crop: await this.getCropForSelectedCropIdAsync(),
      date: new Date(this.date),
      tastingNotes: this.parseTastingNotes(),
      temperature: this.temperature,
      temperatureUnit: this.temperatureUnit,
      totalRoastTimeSeconds: this.roastTime,
    }));

    this.router.navigate(['/roasts']);
  }

  parseTastingNotes(): string[] {
    return this.tastingNotes
      ?.split(',')
      .map((entry) => entry.trim())
      .filter((entry) => entry !== '');
  }

  async getCropForSelectedCropIdAsync() {
    return this.cropSvc.lookupEntityById(this.crop);
  }
}
