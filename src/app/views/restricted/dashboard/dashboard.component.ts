import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppState } from '../../../../config/models/interfaces';
import { AppStateService } from '../../../../core/state/app.state';

@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.styles.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public title = 'Dashboard';
  private state: AppState;
  
  constructor(private appStateServ: AppStateService) {
  
    this.appStateServ.changes.subscribe((state) => {
     this.state = Object.assign({}, state);
    });
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
    let newstate = Object.assign({}, this.state, {pageTitle: this.title});
    this.appStateServ.setState(newstate);
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
