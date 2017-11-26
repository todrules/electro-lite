import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
  {
    path: 'restricted',
    loadChildren: 'app/views/restricted/restricted.module#RestrictedModule'
  }, {
    path: '',
    redirectTo: '/public/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
