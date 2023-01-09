import { Component, OnInit } from '@angular/core';
import { Employee } from "src/app/Models/Employee";
import {EmployeesService} from 'src/app/services/employees.service'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{

  employees:Employee[]=[];

    constructor(private httpService:EmployeesService){

    }

    ngOnInit(): void {
      this.httpService.getAllEmployees().subscribe(
        {
          next:(employees)=>{
            this.employees=employees;
          },
          error:(response)=>{
            console.log(response);
          }
        }
      )
    }
}
