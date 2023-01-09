import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/Models/Employee';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{


  employeeDetails:Employee={
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:0,
    salary:0,
    department:''

  }
  constructor(private employeeService:EmployeesService,private route:ActivatedRoute,private router:Router) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param)=>{
        const id = param.get('id');

        if(id){
          this.employeeService.getEmployeeById(id).subscribe({
            next:(employee)=>{
              this.employeeDetails=employee;
            },
            error:(response)=>{
              console.log(response);
            }
          })
        }
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

  updateEmployee(){
    this.employeeService.updateEmployeeById(this.employeeDetails.id,this.employeeDetails).subscribe({
      next:(employee)=>{
        this.router.navigate(['employees']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
  deleteEmployee(id:string){
    this.employeeService.deleteEmployeeById(id).subscribe({
      next:(employee)=>{
        this.router.navigate(['employees']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
}
