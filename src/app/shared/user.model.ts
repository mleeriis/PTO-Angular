export class User {
  constructor(
    public employeeId: number,
    public employeeType: number,
    public employeeName: string,
    private _token: string,
    private _tokenExperation: number) {
  }

  get token() {
    if (!this._tokenExperation || new Date() > this._tokenExperation){
      return null;
    }
    return this._token;
  }
}
