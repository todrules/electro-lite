import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from '../shared/components/components.module';
import { CoreModule } from '../core/core.module';
import { StateModule } from '../core/state/state.module';
import { SharedModule } from '../shared/shared.module';
import { PublicModule } from './views/public/public.module';
import { RestrictedModule } from './views/restricted/restricted.module';


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
    PublicModule,
    RestrictedModule
  ],
  providers: [
  
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    AppComponent,
    StateModule,
    SharedModule,
    PublicModule,
    RestrictedModule
  ],
  entryComponents: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
