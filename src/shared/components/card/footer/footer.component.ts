import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'card-footer',
  templateUrl: './footer.template.html',
  styleUrls: ['./footer.styles.scss']
})
export class CardFooter implements OnInit, AfterViewInit {

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
