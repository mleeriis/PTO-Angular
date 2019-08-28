import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput', {static: true}) emailInput: ElementRef;
  @ViewChild('passwordInput', {static: true}) passwordInput: ElementRef;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    if (this.authService.attemptLogin(email, password)) {
      this.router.navigate(['/view-requests']);
    } else {
      this.errorMessage = 'Incorrect username or password';
    }
  }

}
