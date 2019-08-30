export class AuthService {
  loggedIn = false;
  employeeType: number;

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
    } else if (email === 'jmarcotte@riis.com' && password === 'password') {
      this.loggedIn = true;
      this.employeeType = 1;
    }
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }
}
