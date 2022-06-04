import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from 'src/app/models/crop/crop';
import { DistanceUnit } from 'src/app/models/scales/distance-unit';
import { CropService } from 'src/app/services/crop/crop-service.service';
import { ScaleService } from 'src/app/services/scales/scale-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  name: string;
  origin: string;
  year: number;
  altitude: number;
  altitudeUnit: DistanceUnit;

  constructor(private scaleSvc: ScaleService,
    private cropSvc: CropService,
    private router: Router) {}

  ngOnInit() {}

  getDistanceUnits() {
    return this.scaleSvc.getDistanceUnits();
  }

  async createCrop(): Promise<void> {
    await this.cropSvc.addNewEntityAsync(Object.assign(new Crop(), {
      name: this.name,
      origin: this.origin,
      year: this.year,
      altitude: this.altitude,
      altitudeUnit: this.altitudeUnit
    }));

    this.router.navigate(['/crops']);
  }
}
