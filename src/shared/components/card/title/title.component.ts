import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'card-title',
  templateUrl: './title.template.html',
  styleUrls: ['./title.styles.scss']
})
export class CardTitle implements OnInit, AfterViewInit {

  
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
