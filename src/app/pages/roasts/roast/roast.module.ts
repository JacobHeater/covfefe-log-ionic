import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoastPageRoutingModule } from './roast-routing.module';

import { RoastPage } from './roast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoastPageRoutingModule
  ],
  declarations: [RoastPage]
})
export class RoastPageModule {}
