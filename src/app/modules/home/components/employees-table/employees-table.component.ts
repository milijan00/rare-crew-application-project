import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  @Input() employees:Employee[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
