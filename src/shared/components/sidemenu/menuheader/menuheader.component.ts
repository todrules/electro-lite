import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'menu-header',
  templateUrl: './menuheader.template.html',
  styleUrls: ['./menuheader.styles.scss']
})
export class MenuHeader implements OnInit, AfterViewInit {

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
