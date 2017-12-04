import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './dashboard/sales/sales.component';
import { CustomerservComponent } from './dashboard/customerserv/customerserv.component';
import { QualityComponent } from './dashboard/quality/quality.component';
import { BudgetComponent } from './dashboard/budget/budget.component';
import { RestrictedComponent } from './restricted.component';
import { NotAllowedComponent } from '../public/special/notallowed-405/notallowed.component';
import { UnauthorizedComponent } from '../public/special/unauthorized-401/unauthorized.component';
import { ServerErrorComponent } from '../public/special/server-error-500/servererror.component';
import { SignupComponent } from '../public/signup/signup.component';
import { NotFoundComponent } from '../public/special/notfound-404/notfound.component';
import { UnavailableComponent } from '../public/special/unavailable-503/unavailable.component';
import { ForbiddenComponent } from '../public/special/forbidden-403/forbidden.component';
import { LoginComponent } from '../public/login/login.component';
import { VideoComponent } from './video/video.component';


const restrictedRoutes: Routes = [
  {  path: '',
    component: RestrictedComponent,
    children: [
      {
        path: 'video',
        component: VideoComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
              {
                path: 'sales',
                component: SalesComponent
              },
              {
                path: 'customer',
                component: CustomerservComponent
              },
              {
                path: 'quality',
                component: QualityComponent
              },
              {
                path: 'budget',
                component: BudgetComponent
              },
          {
            path: '',
            redirectTo: '/restricted/dashboard/sales',
            pathMatch: 'prefix'
          }
          ]},
          {
            path: '',
            redirectTo: '/restricted/dashboard/sales',
            pathMatch: 'prefix'
          },
      {
        path: '',
        redirectTo: '/restricted/dashboard',
        pathMatch: 'prefix'
      }
    ]
  }
 
];

@NgModule({
  imports: [
    RouterModule.forChild(restrictedRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RestrictedRoutingModule {

}
