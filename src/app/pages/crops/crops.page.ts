import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crop } from 'src/app/models/crop/crop';
import { CropService } from 'src/app/services/crop/crop-service.service';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.page.html',
  styleUrls: ['./crops.page.scss'],
})
export class CropsPage implements OnInit {
  crops = new Rx.Subject<Crop[]>();

  constructor(private router: Router, private cropsSvc: CropService) {}

  ngOnInit() {
    this.refreshCrops();
  }

  addCrop() {
    this.router.navigate(['/crops/create']);
  }

  async deleteCrop(crop: Crop) {
    await this.cropsSvc.deleteEntity(crop);
    await this.refreshCrops();
  }

  async refreshCrops() {
    this.crops.next(await this.cropsSvc.fetchAllCropsAsync());
  }
}
