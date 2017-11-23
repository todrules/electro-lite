import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';
import { ComponentsModule } from '../../shared/components/components.module';
import { CoreModule } from '../../core/core.module';
import { StateModule } from '../../core/state/state.module';
import { SharedModule } from '../../shared/shared.module';
import { ViewsModule } from '../../views/views.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    StateModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ViewsModule
  ],
  providers: [
     CarService, CountryService, EventService, NodeService
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    AppComponent,
    HomeComponent,
    StateModule,
    SharedModule,
    ViewsModule
  ],
  entryComponents: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
