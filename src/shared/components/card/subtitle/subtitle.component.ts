import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'card-subtitle',
  templateUrl: './subtitle.template.html',
  styleUrls: ['./subtitle.styles.scss']
})
export class CardSubtitle implements OnInit, AfterViewInit {
  

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
