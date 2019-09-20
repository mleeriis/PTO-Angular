import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BalanceModel} from '../shared/balance.model';

export class AuthService {
  loggedIn = false;
  employeeType: number;
  employeeId: number;
  employeeName: string;
  employeeEmail: string;
  employeeBalance: number;

  readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  isAuthenticated() {
    // TODO: Fix isAuthenticated() so that it is based on localStorage.getItem('token') rather than a hard corded loggedIn variable
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      });

    return promise;
  }

  authenticate(email: string, password: string, callback, errorCallback) {
    this.http.post(this.API_URL + 'login',
      {
        'email': email,
        'password': password
      },
      {
        observe: 'response'
      }).subscribe(
      (resp) => {
        localStorage.setItem('token', resp.headers.get('authorization'));
        this.loggedIn = true;
        return callback && callback();
      },
      error => {
        this.loggedIn = false;
        return errorCallback && errorCallback(error);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
  }

  getData(email: string) {
    this.http.get<{ id: number, firstname: string, lastname: string, email: string, roleID: number, balance: BalanceModel }>(this.API_URL + 'employees/' + email).subscribe(responseData => {
      this.employeeId = responseData.id;
      this.employeeType = responseData.roleID;
      this.employeeName = responseData.firstname + ' ' + responseData.lastname;
      this.employeeEmail = responseData.email;
      this.employeeBalance = responseData.balance.hoursBalance;
    });
  }


}
