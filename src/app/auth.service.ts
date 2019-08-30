export class AuthService {
  loggedIn = false;
  employeeType: number;
  employeeId: number;
  employeeName: string;

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
    if (email === null || password === null) {
      this.loggedIn = false;
    } else if (email === 'mlee@riis.com' && password === 'password') {
      this.loggedIn = true;
      this.employeeType = 2;
      this.employeeId = 2;
      this.employeeName = 'Maria Lee';
    } else if (email === 'jmarcotte@riis.com' && password === 'password') {
      this.loggedIn = true;
      this.employeeType = 1;
      this.employeeId = 1;
      this.employeeName = 'Jillian Marcotte';
    }
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }
}
