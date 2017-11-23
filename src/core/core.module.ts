import { ModuleWithProviders, NgModule, NgZone, Optional, SkipSelf } from '@angular/core';
import { DOCUMENT, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Platform, setupPlatform } from './platform/platform';
import { PlatformConfigToken, providePlatformConfigs } from './platform/platform-registry';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [],
  entryComponents: [],
  exports: [
    CommonModule
  ]
})
export class CoreModule {
  
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        // useFactory: user values
        { provide: PlatformConfigToken, useFactory: providePlatformConfigs },
        
        // useFactory: ionic core providers
        { provide: Platform, useFactory: setupPlatform, deps: [DOCUMENT, PlatformConfigToken, NgZone] }
      ]
    };
  }
}
