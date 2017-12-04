import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'toolbar-menu',
  templateUrl: './toolbar-menu.template.html',
  styleUrls: ['./toolbar-menu.styles.scss']
})
export class ToolbarMenu implements OnInit, AfterViewInit {

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
