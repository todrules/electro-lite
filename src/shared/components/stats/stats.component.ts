import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'stats-comp',
  templateUrl: './stats.template.html',
  styleUrls: ['./stats.styles.scss']
})
export class StatsComponent implements OnInit, AfterViewInit {

  @Input('icon') icon;
  @Input('stat') stat;
  
  public viewStat: any;
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
      this.viewStat = this.stat;
    });
  };

}
