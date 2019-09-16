import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeesService} from '../services/employees.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [EmployeesService]
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild('changePasswordForm', {static: true}) changePassword: NgForm;

  errorMessage = '';
  successMessage = '';

  constructor(private employeeService: EmployeesService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onChangePassword() {
    const newPassword = this.changePassword.value.newPassword;

    this.employeeService.changePassword(this.authService.employeeEmail, newPassword).subscribe(
      () => {
        this.successMessage = 'Successfully changed password';
      }, (err) => {
        this.errorMessage = 'An error occurred!';
      });

  }
}
