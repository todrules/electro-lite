import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'toolbar-logo',
  templateUrl: './toolbar-logo.template.html',
  styleUrls: ['./toolbar-logo.styles.scss']
})
export class ToolbarLogo implements OnInit, AfterViewInit {

  @Input('link') link: string;
  @Input('source') source: string;
  
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
