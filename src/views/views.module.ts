import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './restricted/dashboard/dashboard.module';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    SharedModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  exports: [
    CommonModule,
    DashboardModule,
    SignupComponent,
    LoginComponent,
    SharedModule
  ]
})
export class ViewsModule {

}
