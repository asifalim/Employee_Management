import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Employee} from "./employee";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}`);
  }

  createEmployee(employee:Employee):Observable<any>{
    return this.httpClient.post(`${this.url}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.url}/${id}`);
  }

  updateEmployee(id: number, employee: Employee):Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.url}/${id}`);
  }

}
