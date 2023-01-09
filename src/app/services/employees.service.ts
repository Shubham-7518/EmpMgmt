import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { 
    
  }
  getAllEmployees():Observable<Employee[]>{
    var employees = this.http.get<Employee[]>(this.baseApiUrl+'/api/employees');
    return employees;
  }

  addNewEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000';
    var employee= this.http.post<Employee>(this.baseApiUrl+'/api/employees',addEmployeeRequest);
    return employee;
  }

  getEmployeeById(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/employees/'+id);
  }

  updateEmployeeById(id:string,updateEmployee:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/api/employees/'+id,updateEmployee);
  }


  deleteEmployeeById(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/api/employees/'+id);
  }
}
