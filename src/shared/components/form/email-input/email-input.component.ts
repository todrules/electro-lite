import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'email-input',
  templateUrl: './email-input.template.html',
  styleUrls: ['./email-input.styles.scss']
})
export class EmailInput implements OnInit, AfterViewInit {

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
