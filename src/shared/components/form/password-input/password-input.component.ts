import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.template.html',
  styleUrls: ['./password-input.styles.scss']
})
export class PasswordInput implements OnInit, AfterViewInit {

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
