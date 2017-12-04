import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'budget-comp',
  templateUrl: './budget.template.html',
  styleUrls: ['./budget.styles.scss']
})
export class BudgetComponent implements OnInit, AfterViewInit {

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
  