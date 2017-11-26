import { MenuIFace, StatChartIFace } from '../models/interfaces';
import { generateAreaChartData, randomDataProvider } from '../../shared/utils/chart-utils';

export const MenuItems: MenuIFace = {
  sections: [
    {
      title: 'Menu',
      links: [
        {title: 'Dashboard', link: '/dashboard', component: null, icon: 'ion-ios-speedometer-outline', active: true},
        { title: 'About Us', link: '/about', component: null, icon: 'ion-ios-information-outline', active: false },
        { title: 'Contact', link: '/contact', component: null, icon: 'ion-ios-email-outline', active: false }
      ]
    },
    {
      title: 'Reports',
      links: [
        { title: 'Monthly', link: '/dashboard', component: null, icon: 'ion-stats-bars', active: false },
        { title: 'Quarterly', link: '/about', component: null, icon: 'ion-arrow-graph-up-right', active: false },
        { title: 'Annual', link: '/contact', component: null, icon: 'ion-android-calendar', active: false }
      ]
    },
    {
      title: 'Forms',
      links: [
        { title: 'Incident Report', link: '/dashboard', component: null, icon: 'ion-ios-medkit-outline', active: false },
        { title: 'Expense Report', link: '/about', component: null, icon: 'ion-ios-paper-outline', active: false },
        { title: 'Suggestions', link: '/contact', component: null, icon: 'ion-android-checkbox-outline', active: false }
      ]
    }
  ]
};

export const Tabs: MenuIFace = {
  sections: [
    {
      title: 'Dashboard',
      links: [
        { title: 'Sales', link: '/dashboard/sales', icon: 'ion-cash', active: true },
        { title: 'Quality', link: '/dashboard/quality', icon: 'ion-ribbon-b', active: false },
        { title: 'Customer Service', link: '/dashboard/customer', icon: 'ion-chatbubbles', active: false },
        { title: 'Budget', link: '/dashboard/budget', icon: 'ion-ios-pie', active: false }
      ]
    },
    {
      title: 'Reports',
      links: [
        { title: 'Monthly', link: '/dashboard', component: null, icon: 'ion-stats-bars', active: false },
        { title: 'Quarterly', link: '/about', component: null, icon: 'ion-arrow-graph-up-right', active: false },
        { title: 'Annual', link: '/contact', component: null, icon: 'ion-android-calendar', active: false }
      ]
    },
    {
      title: 'Forms',
      links: [
        { title: 'Incident Report', link: '/dashboard', component: null, icon: 'ion-ios-medkit-outline', active: false },
        { title: 'Expense Report', link: '/about', component: null, icon: 'ion-ios-paper-outline', active: false },
        { title: 'Suggestions', link: '/contact', component: null, icon: 'ion-android-checkbox-outline', active: false }
      ]
    }
  ]
};

export const StatChartData: StatChartIFace[] = [
  {
    label: 'Cash',
    amount: '$1,231',
    icon: 'ion-social-usd',
    unit: 'millions'
  },
  {
    label: 'Credit',
    amount: '$8,452',
    icon: 'ion-card',
    unit: 'millions'
  },
  {
    label: 'Other',
    amount: '$648',
    icon: 'ion-help',
    unit: 'millions'
  }
];

export const chartData = randomDataProvider();
export const areaChartData = generateAreaChartData();

export const AreaChartData = {
  "type": "serial",
  "theme": "light",
  "marginRight": 80,
  "dataProvider": areaChartData,
  'hideCredits': true,
  "categoryField": "date",
  "export": {
    "enabled": true,
    "dateFormat": "YYYY-MM-DD HH:NN:SS"
  },
  'valueAxes': [
    {
      'axisAlpha': 0,
      'position': 'left'
    }
  ],
  'graphs': [
    {
      'id': 'g1',
      'balloonText': `[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>`,
      'bullet': 'round',
      'bulletSize': 8,
      'lineColor': '#DB3069',
      'lineThickness': 2,
      'negativeLineColor': '#0075C4',
      'type': 'smoothedLine',
      'valueField': 'value'
    }
  ],
  'chartScrollbar': {
    'graph': 'g1',
    'gridAlpha': 0,
    'color': '#BFC0C0',
    'scrollbarHeight': 55,
    'backgroundAlpha': 0,
    'selectedBackgroundAlpha': 0.1,
    'selectedBackgroundColor': '#BFC0C0',
    'graphFillAlpha': 0,
    'autoGridCount': true,
    'selectedGraphFillAlpha': 0,
    'graphLineAlpha': 0.2,
    'graphLineColor': '#E6E6EA',
    'selectedGraphLineColor': '#BFC0C0',
    'selectedGraphLineAlpha': 1
  },
  'chartCursor': {
    'categoryBalloonDateFormat': 'YYYY',
    'cursorAlpha': 0,
    'valueLineEnabled': true,
    'valueLineBalloonEnabled': true,
    'valueLineAlpha': 0.5,
    'fullWidth': true
  },
  'dataDateFormat': 'YYYY',
  'categoryAxis': {
    'minPeriod': 'mm',
    'parseDates': true,
    'minorGridAlpha': 0.1,
    'minorGridEnabled': false
  },
};

export const SerialChartData = {
  'type': 'serial',
  'theme': 'light',
  'marginTop': 0,
  'marginRight': 80,
  'dataProvider': chartData,
  'hideCredits': true,
  'valueAxes': [
    {
      'axisAlpha': 0,
      'position': 'left'
    }
  ],
  'graphs': [
    {
      'id': 'g1',
      'balloonText': `[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>`,
      'bullet': 'round',
      'bulletSize': 8,
      'lineColor': '#DB3069',
      'lineThickness': 2,
      'negativeLineColor': '#0075C4',
      'type': 'smoothedLine',
      'valueField': 'value'
    }
  ],
  'chartScrollbar': {
    'graph': 'g1',
    'gridAlpha': 0,
    'color': '#BFC0C0',
    'scrollbarHeight': 55,
    'backgroundAlpha': 0,
    'selectedBackgroundAlpha': 0.1,
    'selectedBackgroundColor': '#BFC0C0',
    'graphFillAlpha': 0,
    'autoGridCount': true,
    'selectedGraphFillAlpha': 0,
    'graphLineAlpha': 0.2,
    'graphLineColor': '#E6E6EA',
    'selectedGraphLineColor': '#BFC0C0',
    'selectedGraphLineAlpha': 1
  },
  'chartCursor': {
    'categoryBalloonDateFormat': 'YYYY',
    'cursorAlpha': 0,
    'valueLineEnabled': true,
    'valueLineBalloonEnabled': true,
    'valueLineAlpha': 0.5,
    'fullWidth': true
  },
  'dataDateFormat': 'YYYY',
  'categoryField': 'year',
  'categoryAxis': {
    'minPeriod': 'YYYY',
    'parseDates': true,
    'minorGridAlpha': 0.1,
    'minorGridEnabled': true
  },
  'export': {
    'enabled': true
  }
};

export const PieChartData = {
  "type": "pie",
  "angle": 10.8,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "depth3D": 20,
  "hideCredits": true,
  "innerRadius": "42%",
  "outlineAlpha": 0,
  "titleField": "category",
  "valueField": "column-1",
  "autoDisplay": true,
  "tapToActivate": false,
  "theme": "light",
  "allLabels": [],
  "balloon": {},
  "legend": {
    "enabled": true,
    "align": "center",
    "marginLeft": 0,
    "marginRight": 0,
    "markerType": "circle"
  },
  "titles": [],
  "dataProvider": [
    {
      "category": "category 1",
      "column-1": 8
    },
    {
      "category": "category 2",
      "column-1": 6
    },
    {
      "category": "category 3",
      "column-1": 2
    }
  ]
};

export const PyramidData = {
  "type": "funnel",
  "angle": 0,
  "balloonText": "[[title]]:<b>[[value]]</b>",
  "depth3D": 30,
  "hideCredits": true,
  "labelPosition": "right",
  "pullDistance": 45,
  "rotate": true,
  "labelsEnabled": false,
  "marginLeft": 40,
  "marginRight": 40,
  "marginTop": 40,
  "marginBottom": 40,
  "pullOutDuration": 3,
  "titleField": "title",
  "valueField": "value",
  "autoDisplay": true,
  "tapToActivate": false,
  "theme": "light",
  "allLabels": [],
  "balloon": {},
  "titles": [],
  "dataProvider": [
    {
      "title": "Website visits",
      "value": 145
    },
    {
      "title": "Downloads",
      "value": 123
    },
    {
      "title": "Requested prices",
      "value": 98
    },
    {
      "title": "Contaced",
      "value": 72
    },
    {
      "title": "Purchased",
      "value": 35
    },
    {
      "title": "Asked for support",
      "value": 25
    },
    {
      "title": "Purchased more",
      "value": 18
    }
  ]
};

export const BarChartData = {
  "type": "serial",
  "categoryField": "category",
  "angle": 32,
  "depth3D": 17,
  "hideCredits": true,
  "marginBottom": 5,
  "marginLeft": 5,
  "marginRight": 5,
  "marginTop": 5,
  "plotAreaBorderColor": "#FFFFFF",
  "startDuration": 1,
  "autoDisplay": true,
  "borderColor": "#FFFFFF",
  "tapToActivate": false,
  "theme": "light",
  "categoryAxis": {
    "gridPosition": "start",
    "autoGridCount": false,
    "axisAlpha": 0,
    "axisColor": "#FFFFFF",
    "axisThickness": 0,
    "fontSize": 0,
    "gridAlpha": 0,
    "gridColor": "#FFFFFF",
    "gridCount": 0,
    "gridThickness": 0,
    "labelsEnabled": false,
    "showFirstLabel": false,
    "showLastLabel": false,
    "tickLength": 0,
    "titleFontSize": 0
  },
  "trendLines": [],
  "graphs": [
    {
      "balloonText": "[[title]] of [[category]]:[[value]]",
      "fillAlphas": 0.88,
      "id": "AmGraph-1",
      "labelText": "[[value]]",
      "title": "graph 1",
      "type": "column",
      "valueField": "column-1"
    },
    {
      "balloonText": "[[title]] of [[category]]:[[value]]",
      "bullet": "round",
      "id": "AmGraph-2",
      "labelText": "[[value]]",
      "lineThickness": 4,
      "title": "graph 2",
      "type": "smoothedLine",
      "valueField": "column-2"
    }
  ],
  "guides": [],
  "valueAxes": [
    {
      "id": "ValueAxis-1",
      "axisColor": "#FFFFFF",
      "axisThickness": 0,
      "fontSize": 0,
      "gridAlpha": 0,
      "gridColor": "#FFFFFF",
      "gridCount": 0,
      "gridThickness": 0,
      "minorGridAlpha": 0,
      "showFirstLabel": false,
      "showLastLabel": false,
      "tickLength": 0,
      "title": "Axis title",
      "titleFontSize": 0
    }
  ],
  "allLabels": [],
  "balloon": {},
  "legend": {
    "enabled": true,
    "useGraphSettings": true
  },
  "titles": [
    {
      "id": "Title-1",
      "size": 15,
      "text": "Chart Title"
    }
  ],
  "dataProvider": [
    {
      "category": "category 1",
      "column-1": 8,
      "column-2": 5
    },
    {
      "category": "category 2",
      "column-1": 6,
      "column-2": 8
    },
    {
      "category": "category 3",
      "column-1": 2,
      "column-2": 5
    }
  ]
};

export const NewAreaChartData = {
  "type": "serial",
  "categoryField": "date",
  "hideCredits": true,
  "dataDateFormat": "YYYY-MM-DD HH:NN",
  "angle": 36,
  "depth3D": 31,
  "plotAreaBorderColor": "#FFFFFF",
  "tapToActivate": false,
  "theme": "light",
  "categoryAxis": {
    "minPeriod": "mm",
    "parseDates": true,
    "axisAlpha": 0,
    "axisColor": "#FFFFFF",
    "fontSize": 0,
    "gridAlpha": 0,
    "gridColor": "#FFFFFF",
    "gridThickness": 0,
    "labelFrequency": 0,
    "labelsEnabled": false,
    "minorGridAlpha": 0,
    "showFirstLabel": false,
    "showLastLabel": false,
    "tickLength": 0,
    "titleColor": "#FF8000",
    "titleFontSize": 19
  },
  "chartCursor": {
    "enabled": true,
    "categoryBalloonDateFormat": "JJ:NN",
    "tabIndex": -3
  },
  "trendLines": [],
  "graphs": [
    {
      "fillAlphas": 0.7,
      "id": "AmGraph-1",
      "lineAlpha": 0,
      "title": "graph 1",
      "valueField": "column-1"
    },
    {
      "fillAlphas": 0.7,
      "id": "AmGraph-2",
      "lineAlpha": 0,
      "title": "graph 2",
      "valueField": "column-2"
    }
  ],
  "guides": [],
  "valueAxes": [
    {
      "axisFrequency": 0,
      "id": "ValueAxis-1",
      "autoGridCount": false,
      "axisThickness": 0,
      "color": "#FFFFFF",
      "fontSize": 0,
      "gridColor": "#FFFFFF",
      "gridThickness": 0,
      "minorGridAlpha": 0,
      "showFirstLabel": false,
      "showLastLabel": false,
      "title": "Axis title",
      "titleColor": "#FF8000",
      "titleFontSize": 0
    }
  ],
  "allLabels": [],
  "balloon": {},
  "legend": {
    "enabled": true,
    "borderColor": "#FFFFFF",
    "markerBorderThickness": 0
  },
  "titles": [
    {
      "id": "Title-1",
      "size": 15,
      "text": "Chart Title"
    }
  ],
  "dataProvider": [
    {
      "column-1": 8,
      "column-2": 5,
      "date": "2014-03-01 07:57"
    },
    {
      "column-1": 6,
      "column-2": 7,
      "date": "2014-03-01 07:58"
    },
    {
      "column-1": 2,
      "column-2": 3,
      "date": "2014-03-01 07:59"
    },
    {
      "column-1": 1,
      "column-2": 3,
      "date": "2014-03-01 08:00"
    },
    {
      "column-1": 2,
      "column-2": 1,
      "date": "2014-03-01 08:01"
    },
    {
      "column-1": 3,
      "column-2": 2,
      "date": "2014-03-01 08:02"
    },
    {
      "column-1": 6,
      "column-2": 8,
      "date": "2014-03-01 08:03"
    }
  ]
};
