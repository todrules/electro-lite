import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../../shared/shared.module';
import { PublicComponent } from './public.component';
import { ForbiddenComponent } from './special/forbidden-403/forbidden.component';
import { NotFoundComponent } from './special/notfound-404/notfound.component';
import { ServerErrorComponent } from './special/server-error-500/servererror.component';
import { UnauthorizedComponent } from './special/unauthorized-401/unauthorized.component';
import { UnavailableComponent } from './special/unavailable-503/unavailable.component';
import { NotAllowedComponent } from './special/notallowed-405/notallowed.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    PublicComponent,
    ForbiddenComponent,
    NotFoundComponent,
    ServerErrorComponent,
    UnauthorizedComponent,
    UnavailableComponent,
    NotAllowedComponent
  ],
  exports: [
    CommonModule,
    SignupComponent,
    LoginComponent,
    SharedModule,
    PublicComponent,
    ForbiddenComponent,
    NotFoundComponent,
    ServerErrorComponent,
    UnauthorizedComponent,
    UnavailableComponent,
    NotAllowedComponent
  ]
})
export class PublicModule {

}
