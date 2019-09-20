import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeesService} from '../services/employees.service';
import {Employee} from '../shared/employee.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmployeesService]
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('addEmployeeForm', {static: true}) createEmployeeForm: NgForm;
  @ViewChild('addBalanceForm', {static: true}) updateBalance: NgForm;

  allEmployees: Employee[];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private employeeService: EmployeesService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employeeRes => {
      this.allEmployees = employeeRes;
    });
  }

  onAddEmployee() {
    const firstName = this.createEmployeeForm.value.Firstname;
    const lastName = this.createEmployeeForm.value.Lastname;
    const email = this.createEmployeeForm.value.email;
    const roleID = this.createEmployeeForm.value.RoleID;
    const password = this.createEmployeeForm.value.password;
    const newEmployee = new Employee(firstName, lastName, email, roleID, password);


    this.employeeService.createEmployee(newEmployee).subscribe(() => {
      this.errorMessage = '';
      this.successMessage = 'Successfully created employee';
      this.createEmployeeForm.reset();
    }, error => {
      this.successMessage = '';
      this.errorMessage = error.error.message;
    });

    // TODO: Update table showing all employees with newly created employee
  }

  onAddBalance(employeeData: Employee, additionalBalance: string) {
    const currentBalance = employeeData.balance.hoursBalance;
    const newBalance = currentBalance + +additionalBalance;
    const empID = employeeData.id;

    this.employeeService.addBalance(empID, newBalance).subscribe(() => {
      // TODO: After successful update of balance, reset form and refresh table
    }, () => {
      // TODO: After update balance unsuccessful, display error message for user
    });
  }
}
