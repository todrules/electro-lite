import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './appicon.template.html',
  styleUrls: ['./appicon.styles.scss']
})
export class AppIcon implements OnInit, AfterViewInit {
  
  @Input('name') name;
  
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
