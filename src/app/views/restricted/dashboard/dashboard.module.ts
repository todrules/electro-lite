import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { CustomerservComponent } from './customerserv/customerserv.component';
import { QualityComponent } from './quality/quality.component';
import { BudgetComponent } from './budget/budget.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    SalesComponent,
    CustomerservComponent,
    QualityComponent,
    BudgetComponent
  ],
  exports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule {

}
