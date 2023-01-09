import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest:Employee={
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  }

  constructor(private httEmployeeService:EmployeesService,private router:Router) {
    
  }
  ngOnInit():void{

  }

  addEmployee():void{
    this.httEmployeeService.addNewEmployee(this.addEmployeeRequest).subscribe({
      next:(employee)=>{
        this.router.navigate(["employees"]);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
}
