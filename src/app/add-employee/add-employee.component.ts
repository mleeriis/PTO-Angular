import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeesService} from '../services/employees.service';
import {Employee} from '../shared/employee.model';
import {NgForm} from '@angular/forms';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmployeesService]
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('addEmployeeForm', {static: true}) createEmployeeForm: NgForm;

  allEmployees: Employee[];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private employeeService: EmployeesService) {
  }

  ngOnInit() {
    this.allEmployees = this.employeeService.getEmployees();
    this.employeeService.employeesUpdated.subscribe((updatedEmployees: Employee[]) => {
      this.allEmployees = updatedEmployees;
    });
  }

  onAddEmployee() {
    const firstName = this.createEmployeeForm.value.Firstname;
    const lastName = this.createEmployeeForm.value.Lastname;
    const email = this.createEmployeeForm.value.email;
    const roleID = this.createEmployeeForm.value.RoleID;
    const password = this.createEmployeeForm.value.password;
    const newEmployee = new Employee(firstName, lastName, email, roleID, password, 120);


    const createObs: Observable<object> = this.employeeService.createEmployee(newEmployee);

    createObs.subscribe(responseData => {
      this.errorMessage = '';
      this.successMessage = 'Successfully created employee';
      this.createEmployeeForm.reset();
      this.employeeService.addEmployee(newEmployee);
    }, error => {
      this.successMessage = '';
      this.errorMessage = error.error.message;
    });

  }
}
