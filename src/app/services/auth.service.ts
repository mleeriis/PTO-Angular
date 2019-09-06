import {HttpClient, HttpHeaders} from '@angular/common/http';

export class AuthService {
  loggedIn = false;
  employeeType: number;
  employeeId: number;
  employeeName: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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
    this.http.post('http://localhost:8080/login',
      {
        'email': email,
        'password': password
      }, this.httpOptions).subscribe(
      responseData => {
        this.loggedIn = !responseData;
        return callback && callback();
      },
      errorMessage => {
        this.loggedIn = false;
        return errorCallback && errorCallback();
      }
    );
  }

  logout() {
    this.loggedIn = false;
  }

}
