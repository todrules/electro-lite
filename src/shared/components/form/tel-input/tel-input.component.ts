import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'tel-input',
  templateUrl: './tel-input.template.html',
  styleUrls: ['./tel-input.styles.scss']
})
export class TelInput implements OnInit, AfterViewInit {

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
