import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.template.html',
  styleUrls: ['./public.styles.scss']
})
export class PublicComponent implements OnInit, AfterViewInit {

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
  