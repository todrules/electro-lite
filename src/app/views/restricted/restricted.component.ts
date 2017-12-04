import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.template.html',
  styleUrls: ['./restricted.styles.scss']
})
export class RestrictedComponent implements OnInit, AfterViewInit {

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
  