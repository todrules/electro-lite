import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'quality-comp',
  templateUrl: './quality.template.html',
  styleUrls: ['./quality.styles.scss']
})
export class QualityComponent implements OnInit, AfterViewInit {

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
  