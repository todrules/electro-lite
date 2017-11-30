import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppContainer } from './app-container/app-container.component';
import { AppIcon } from './appicon/appicon.component';
import { FabIcon } from './fabicon/fabicon.component';
import { MainContent } from './main-content/maincontent.component';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayDirective } from './overlay/overlay.directive';
import { PopoverComponent } from './popover/popover.component';
import { SideMenuModule } from './sidemenu/sidemenu.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ViewContent } from './view-content/view-content.component';
import { PageTitle } from './pagetitle/pagetitle.component';
import { ToolbarLogo } from './toolbar/logo/toolbar-logo.component';
import { ToolbarMenu } from './toolbar/menu/toolbar-menu.component';
import { StatsComponent } from './stats/stats.component';
import { CardModule } from './card/card.module';
import { FormModule } from './form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SideMenuModule,
    CardModule,
    FormModule
  ],
  declarations: [
    ToolbarComponent,
    MainContent,
    AppContainer,
    ViewContent,
    AppIcon,
    PopoverComponent,
    OverlayDirective,
    OverlayComponent,
    FabIcon,
    PageTitle,
    ToolbarLogo,
    ToolbarMenu,
    StatsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ToolbarComponent,
    MainContent,
    SideMenuModule,
    AppContainer,
    ViewContent,
    AppIcon,
    PopoverComponent,
    OverlayDirective,
    OverlayComponent,
    FabIcon,
    PageTitle,
    ToolbarLogo,
    ToolbarMenu,
    StatsComponent,
    CardModule,
    FormModule
  ],
  entryComponents: [
    OverlayComponent,
    PopoverComponent
  ]
})
export class ComponentsModule {

}
