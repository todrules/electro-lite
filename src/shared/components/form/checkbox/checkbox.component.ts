import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.template.html',
  styleUrls: ['./checkbox.styles.scss']
})
export class Checkbox implements OnInit, AfterViewInit {

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
