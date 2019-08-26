import {Employee} from '../shared/employee.model';
import {EventEmitter} from '@angular/core';

export class EmployeesService {
  employeesUpdated = new EventEmitter<Employee[]>();
  private allEmployees: Employee[] = [
    new Employee(1, 'Jillian', 'Marcotte', 'jmarcotte@riis.com', 1, 'password'),
    new Employee(2, 'Maria', 'Lee', 'mlee@riis.com', 2, 'password')
  ];

  getEmployees() {
    return this.allEmployees.slice();
  }

  addEmployee(newEmployee: Employee){
    this.allEmployees.push(newEmployee);
    this.employeesUpdated.emit(this.allEmployees.slice());
  }
}
