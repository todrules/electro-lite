import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppState } from '../../../config/models/interfaces';
import { AppStateService } from '../../../core/state/app.state';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'fab-icon',
  templateUrl: './fabicon.template.html',
  styleUrls: ['./fabicon.styles.scss']
})
export class FabIcon implements OnInit, AfterViewInit {

  componentData = null;
  public state: AppState;
  
  constructor(private appStateServ: AppStateService) {
    this.appStateServ.changes.subscribe((state) => {
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
  
  public displayStatePopover = (e) => {
    console.log(e);
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    let state = this.appStateServ.getState();
    this.componentData = {
      component: OverlayComponent,
      inputs: {
        showNum: 9,
        x: x,
        y: y,
        state: state
      }
    };
  };

}
