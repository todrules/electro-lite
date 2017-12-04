import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent
  ],
  providers: [
  
  ],
  entryComponents: [
    VideoComponent
  ],
  exports: [
    CommonModule,
    VideoComponent
  ]
})
export class VideoModule {

}
