import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AppStateService } from '../../../core/state/app.state';

@Component({
  selector: 'page-title',
  templateUrl: './pagetitle.template.html',
  styleUrls: ['./pagetitle.styles.scss']
})
export class PageTitle implements OnInit, AfterViewInit {

  @Input('size') size;
  public title: string;
  
  constructor(private appStateServ: AppStateService) {
  
    this.title = 'Default Title';
    
    
    this.appStateServ.changes.subscribe((state) => {
      this.title = state.pageTitle;
      
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
