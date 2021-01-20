import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: ":placeId",
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      }
    ]
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'book',
    loadChildren: () => import('./home/home-add/home-add.module').then( m => m.HomeAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
