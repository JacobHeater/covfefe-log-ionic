import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoastsPage } from './roasts.page';

const routes: Routes = [
  {
    path: '',
    component: RoastsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoastsPageRoutingModule {}
