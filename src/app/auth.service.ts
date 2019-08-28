export class AuthService {
  loggedIn = false;

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
    if (email === 'mlee@riis.com' && password === 'password') {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }
}
