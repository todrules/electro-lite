import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './sidemenu.template.html',
  styleUrls: ['./sidemenu.styles.scss']
})
export class SideMenu implements OnInit, AfterViewInit {

  constructor() {
  
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
