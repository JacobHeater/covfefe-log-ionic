import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roast } from 'src/app/models/roasts/roast';
import { RoastService } from 'src/app/services/roast/roast-service.service';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-roasts',
  templateUrl: './roasts.page.html',
  styleUrls: ['./roasts.page.scss'],
})
export class RoastsPage implements OnInit {
  roasts = new Rx.Subject<Roast[]>();

  constructor(private router: Router, private roastSvc: RoastService) { }

  ngOnInit() {
    this.fetchRoasts();
  }

  addRoast() {
    this.router.navigate(['/roasts/create']);
  }

  async deleteRoast(r: Roast) {
    await this.roastSvc.deleteEntity(r);
    await this.fetchRoasts();
  }

  async fetchRoasts() {
    console.log(await this.roastSvc.findAllRoastsAsync());
    this.roasts.next(await this.roastSvc.findAllRoastsAsync());
  }
}
