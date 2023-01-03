import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {
emps:Employee[]=[]
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.emps=this.service.getEmployees();

  }

  

}