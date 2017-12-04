import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.template.html',
  styleUrls: ['./card.styles.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

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
  