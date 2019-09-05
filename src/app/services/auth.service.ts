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
      }
    );
    return promise;
  }


  attemptLogin(email: string, password: string) {
    this.http.post('http://localhost:8080/login',
      {
        'email': email,
        'password': password
      }, this.httpOptions).subscribe(responseData => {
        this.loggedIn = !responseData;
    });

    // if (email === null || password === null) {
    //   this.loggedIn = false;
    // } else if (email === 'mlee@riis.com' && password === 'password') {
    //   this.loggedIn = true;
    //   this.employeeType = 2;
    //   this.employeeId = 2;
    //   this.employeeName = 'Maria Lee';
    // } else if (email === 'jmarcotte@riis.com' && password === 'password') {
    //   this.loggedIn = true;
    //   this.employeeType = 1;
    //   this.employeeId = 1;
    //   this.employeeName = 'Jillian Marcotte';
    // }
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }
}
