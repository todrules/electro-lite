import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.template.html',
  styleUrls: ['./number-input.styles.scss']
})
export class NumberInput implements OnInit, AfterViewInit {

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
