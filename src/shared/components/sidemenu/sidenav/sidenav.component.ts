import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuItems } from '../../../../config/data/data';
import { MenuIFace } from '../../../../config/models/interfaces';

@Component({
  selector: 'side-nav',
  templateUrl: './sidenav.template.html',
  styleUrls: ['./sidenav.styles.scss']
})
export class SideNav implements OnInit, AfterViewInit {
  
  public menuItems: MenuIFace;
  
  constructor() {
    this.menuItems = MenuItems;
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
  
  };
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    setTimeout(() => {
      // do something
    });
  };

}
