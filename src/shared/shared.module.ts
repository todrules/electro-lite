import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComponentsModule } from './components/components.module';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ComponentsModule,
    AmChartsModule
    
  ],
  providers: [
  
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    ComponentsModule,
    AmChartsModule
  ]
})

export class SharedModule {

}
