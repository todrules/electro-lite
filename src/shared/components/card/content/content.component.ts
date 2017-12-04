import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'card-content',
  templateUrl: './content.template.html',
  styleUrls: ['./content.styles.scss']
})
export class CardContent implements OnInit, AfterViewInit {

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
