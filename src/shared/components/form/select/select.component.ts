import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.template.html',
  styleUrls: ['./select.styles.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {

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
  