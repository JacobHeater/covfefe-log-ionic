import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoastPage } from './roast.page';

const routes: Routes = [
  {
    path: '',
    component: RoastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoastPageRoutingModule {}
