import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { BarChartData, NewAreaChartData, PieChartData, PyramidData } from '../../../../../config/data/data';



@Component({
  selector: 'sales-comp',
  templateUrl: './sales.template.html',
  styleUrls: ['./sales.styles.scss']
})
export class SalesComponent implements OnInit, AfterViewInit, OnDestroy {
  
  private chart: AmChart;
  public options: any;
  private chart2: AmChart;
  private timer: number;
  public barChartOptions;
  public pieChartOptions;
  public pyramidOptions;
  
  constructor(private AmCharts: AmChartsService) {
  
  }
  
  private randomDataProvider = () => {
    const dataProvider = [];
    
    // Generate random data
    for (let year = 1950; year <= 2005; ++year) {
      dataProvider.push({
        year: '' + year,
        value: Math.floor(Math.random() * 100) - 50
      });
    }
    
    return dataProvider;
  }
  
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
    this.options = NewAreaChartData;
    this.barChartOptions = BarChartData;
    this.pieChartOptions = PieChartData;
    this.pyramidOptions = PyramidData;
  };
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
   
    setTimeout(() => {
    
    }, 1000);
  };
  
  ngOnDestroy() {
    this.destroyThis();
  }
  
  private destroyThis = () => {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  };

}
