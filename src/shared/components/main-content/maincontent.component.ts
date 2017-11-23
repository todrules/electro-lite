import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './maincontent.template.html',
  styleUrls: ['./maincontent.styles.scss']
})
export class MainContent implements OnInit, AfterViewInit {

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
