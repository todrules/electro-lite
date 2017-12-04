import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.template.html',
  styleUrls: ['./form.styles.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

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
  