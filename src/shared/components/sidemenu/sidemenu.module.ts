import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuContainer } from './menucontainer/menucontainer.component';
import { MenuHeader } from './menuheader/menuheader.component';
import { ProfileComponent } from './profile/profile.component';
import { SideMenu } from './sidemenu.component';
import { SideNav } from './sidenav/sidenav.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    SideMenu,
    MenuHeader,
    SideNav,
    MenuContainer,
    ProfileComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SideMenu,
    MenuHeader,
    SideNav,
    MenuContainer,
    ProfileComponent
  ]
})
export class SideMenuModule {

}
