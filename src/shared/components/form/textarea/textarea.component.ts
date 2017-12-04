import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.template.html',
  styleUrls: ['./textarea.styles.scss']
})
export class TextareaComponent implements OnInit, AfterViewInit {

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
  