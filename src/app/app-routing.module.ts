import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'roasts',
    loadChildren: () => import('./roasts/roasts.module').then( m => m.RoastsPageModule)
  },
  {
    path: 'roast',
    loadChildren: () => import('./roasts/roast/roast.module').then( m => m.RoastPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
