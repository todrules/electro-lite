import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RestrictedComponent } from './restricted.component';
import { RestrictedRoutingModule } from './restricted-routing.module';
import { VideoModule } from './video/video.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardModule,
    VideoModule,
    RestrictedRoutingModule
  ],
  declarations: [
    RestrictedComponent
  ],
  exports: [
    CommonModule,
    SharedModule,
    DashboardModule,
    VideoModule
  ]
})
export class RestrictedModule {

}
