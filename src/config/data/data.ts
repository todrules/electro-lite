import { MenuIFace, StatChartIFace } from '../models/interfaces';

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
