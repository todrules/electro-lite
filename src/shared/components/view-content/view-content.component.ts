import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'view-content',
  templateUrl: './view-content.template.html',
  styleUrls: ['./view-content.styles.scss']
})
export class ViewContent implements OnInit, AfterViewInit {

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
