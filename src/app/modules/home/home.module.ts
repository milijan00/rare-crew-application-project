import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    HomePageComponent,
    EmployeesTableComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: HomePageComponent}
    ]),
  ]
})
export class HomeModule { }
