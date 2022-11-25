import { Component, OnInit } from '@angular/core';
import { EmployeeRecord } from '../../models/EmployeeRecord';
import { Employee } from '../../models/Employee';
import { EmployeeRecordsService } from '../../services/employee-records.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  employeeRecords: EmployeeRecord[] = [];
  employees: Employee[]= [];

  constructor(private service : EmployeeRecordsService) { }

  ngOnInit(): void {
    this.service.get().subscribe(res => {
      this.employeeRecords = res;
      this.employees = this.distinctEmployees(res);
      this.sumHoursForEveryEmployee();
    }) ;
  }

  private distinctEmployees(records : EmployeeRecord[]) : Employee[]{
    let employees : Employee[] = [];
    for(let r of records){
      if(employees.find(e => e.EmployeeName == r.EmployeeName) == undefined && r.EmployeeName){
        employees.push( new Employee(r.EmployeeName));
      }
    }

    return employees;
  }

  private sumHoursForEveryEmployee() {
    let records = [];
    for(let e of this.employees){
      records = this.employeeRecords.filter(x => x.EmployeeName == e.EmployeeName);
      e.TotalMonthlyTime += this.calculateTotalHours(records);
    }
  }
  private calculateTotalHours(records :   EmployeeRecord[]) : number{
    let totalHours: number = 0;

    for(let r of records){
      totalHours += Math.abs(new Date(r.StarTimeUtc).getHours() - new Date(r.EndTimeUtc).getHours());
    }
    return totalHours;
  }

}
