import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmployeesService} from '../services/employees.service';
import {Employee} from '../shared/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmployeesService]
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('firstNameInput', {static: true}) firstNameInput: ElementRef;
  @ViewChild('lastNameInput', {static: true}) lastNameInput: ElementRef;
  @ViewChild('emailInput', {static: true}) emailInput: ElementRef;
  @ViewChild('roleIDInput', {static: true}) roleIDInput: ElementRef;
  @ViewChild('passwordInput', {static: true}) passwordInput: ElementRef;

  allEmployees: Employee[];

  constructor(private employeeService: EmployeesService) {
  }

  ngOnInit() {
    this.allEmployees = this.employeeService.getEmployees();
    this.employeeService.employeesUpdated.subscribe((updatedEmployees: Employee[]) => {
      this.allEmployees = updatedEmployees;
    });
  }

  addEmployee() {
    const firstName = this.firstNameInput.nativeElement.value;
    const lastName = this.lastNameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const roleID = this.roleIDInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const newEmployee = new Employee(3, firstName, lastName, email, roleID, password);
    this.employeeService.addEmployee(newEmployee);
  }
}
