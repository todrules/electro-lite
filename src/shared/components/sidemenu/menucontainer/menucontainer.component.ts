import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'menu-container',
  templateUrl: './menucontainer.template.html',
  styleUrls: ['./menucontainer.styles.scss']
})
export class MenuContainer implements OnInit, AfterViewInit {

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
