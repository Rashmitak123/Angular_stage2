import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee, EmployeeService } from '../employee/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit,OnDestroy {
id:number=0;
emp :Employee | undefined;
sub!:Subscription
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private services:EmployeeService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
  // we have to get the selected emp object here on this page at the time of its initialialsation

     this.sub = this.activatedRoute.paramMap.subscribe((params)=>{
       console.log(params);
       let idd=params.get('id');
        if(idd){
          this.id=+idd;
        }

       if(this.services.getEmployeById(this.id)){
             this.emp = this.services.getEmployeById(this.id);
       }
     })

  }
  back():void{
    this.router.navigate(['emps']);
  }



}