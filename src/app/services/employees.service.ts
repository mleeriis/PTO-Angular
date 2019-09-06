import {Employee} from '../shared/employee.model';
import {EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


export class EmployeesService {
  employeesUpdated = new EventEmitter<Employee[]>();
  private allEmployees: Employee[] = [
    new Employee('Jillian', 'Marcotte', 'jmarcotte@riis.com', 1, 'password', 120),
    new Employee('Maria', 'Lee', 'mlee@riis.com', 2, 'password', 120)
  ];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.allEmployees.slice();
  }

  addEmployee(newEmployee: Employee) {
    this.allEmployees.push(newEmployee);
    this.employeesUpdated.emit(this.allEmployees.slice());
  }

  createEmployee(newEmployee: Employee){
    return this.http.post('http://localhost:8080/employees', {
      'firstname': newEmployee.Firstname,
      'lastname': newEmployee.Lastname,
      'email': newEmployee.email,
      'roleID': newEmployee.RoleID,
      'password': newEmployee.password
    }, this.httpOptions);
  }
}
