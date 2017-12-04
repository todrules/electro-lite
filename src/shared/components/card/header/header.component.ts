import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'card-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.styles.scss']
})
export class CardHeader implements OnInit, AfterViewInit {

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
