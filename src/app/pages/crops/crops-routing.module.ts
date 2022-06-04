import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsPage } from './crops.page';

const routes: Routes = [
  {
    path: '',
    component: CropsPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'crop',
    loadChildren: () => import('./crop/crop.module').then( m => m.CropPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropsPageRoutingModule {}
