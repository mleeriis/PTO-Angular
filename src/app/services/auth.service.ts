import {HttpClient} from '@angular/common/http';

export class AuthService {
  loggedIn = false;
  employeeType: number;
  employeeId: number;
  employeeName: string;

  readonly API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  isAuthenticated() {
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
      }).subscribe(
      () => {
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
    this.loggedIn = false;
  }

  getData(email: string) {
    this.http.get<{ id: number, firstname: string, lastname: string, email: string, roleID: number }>(this.API_URL + 'employees/' + email).subscribe(responseData => {
      this.employeeId = responseData.id;
      this.employeeType = responseData.roleID;
      this.employeeName = responseData.firstname + ' ' + responseData.lastname;
    });
  }


}
