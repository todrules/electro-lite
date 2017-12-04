import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './special/forbidden-403/forbidden.component';
import { NotFoundComponent } from './special/notfound-404/notfound.component';
import { ServerErrorComponent } from './special/server-error-500/servererror.component';
import { UnauthorizedComponent } from './special/unauthorized-401/unauthorized.component';
import { UnavailableComponent } from './special/unavailable-503/unavailable.component';
import { NotAllowedComponent } from './special/notallowed-405/notallowed.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PublicComponent } from './public.component';


export const publicRoutes: Routes = [
  { path: '', redirectTo: '/public/login', pathMatch: 'full' },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: '/public/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: 'pagenotfound', component: NotFoundComponent },
      { path: 'servererror', component: ServerErrorComponent },
      { path: 'unauthorized', component: UnauthorizedComponent },
      { path: 'unavailable', component: UnavailableComponent },
      { path: 'notallowed', component: NotAllowedComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class PublicRoutingModule {

}
