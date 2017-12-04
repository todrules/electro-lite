import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'form-item',
  templateUrl: './form-item.template.html',
  styleUrls: ['./form-item.styles.scss']
})
export class FormItem implements OnInit, AfterViewInit {

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
