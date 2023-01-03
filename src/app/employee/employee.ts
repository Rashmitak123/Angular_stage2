import { Injectable } from "@angular/core";

export class Employee{

    id:number=0;
    name:string='';
    dept:string='';
    sal:number=0;
    constructor (id:number,name:string, dept:string, sal:number){this.id=id;this.name=name;this.dept=dept;this.sal=sal;}
}

@Injectable({
    providedIn:'root'
})
export class EmployeeService{

    public getEmployees(){

     let emps:Employee[];
     emps=[
        new Employee(1,'mitali','admin',40000),
        new Employee(2,'Hemant','IT',50000),
        new Employee(3,'Niddhi','sales',40000)

    ]
     return emps;
}

    getEmployeById(id:number){

      let emps:Employee[]=this.getEmployees();
      return emps.find(e=>e.id==id);
    }

    }
