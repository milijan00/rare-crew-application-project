import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { Chart } from 'chart.js/auto'
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() employees : Employee[] = [];
  chart : Chart | null = null;
  constructor() { }

  ngOnInit(): void {
  this.chart = new Chart(
    "pie",
    {
      type : "pie",
      data : {
        labels : this.employees.map(el => el.EmployeeName),
        datasets :[
          {
            label : "Total Monthly Hours",
            data :this.employees.map(el => el.TotalMonthlyTime) 
          }
        ] 
      }
    }
  );}

}
