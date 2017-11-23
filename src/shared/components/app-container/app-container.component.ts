import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.template.html',
  styleUrls: ['./app-container.styles.scss']
})
export class AppContainer implements OnInit, AfterViewInit {

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
