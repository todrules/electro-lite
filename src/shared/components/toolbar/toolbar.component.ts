import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppState } from '../../../config/models/interfaces';
import { AppStateService } from '../../../core/state/app.state';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.template.html',
  styleUrls: ['./toolbar.styles.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

  public title: string;
  private sub;
  public state: AppState;
  
  constructor(private appStateServ: AppStateService) {
  
    this.title = 'Default Title';
    this.appStateServ.changes.subscribe((state) => {
      this.title = state.pageTitle;
      this.state = Object.assign({}, state);
    });
    
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
