import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: true}) loginForm: NgForm;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.authenticate(email, password, () => {
      this.authService.getData(email);
      this.router.navigate(['/view-requests']);
    }, (error) => {
      if (error.status === 0) {
        this.errorMessage = 'Server is down. Please try again later.';
      } else {
        this.errorMessage = 'Incorrect username or password';
      }
    });
  }
}
