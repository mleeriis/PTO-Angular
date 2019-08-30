import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.loggedIn;
  }

  isHR() {
    return (this.authService.employeeType === 1);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
