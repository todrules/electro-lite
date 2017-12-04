import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'customerserv-comp',
  templateUrl: './customerserv.template.html',
  styleUrls: ['./customerserv.styles.scss']
})
export class CustomerservComponent implements OnInit, AfterViewInit {

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
  