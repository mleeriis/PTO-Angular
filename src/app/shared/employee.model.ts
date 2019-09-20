import {BalanceModel} from './balance.model';

export class Employee {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public roleID: number,
    public password: string,
    public balance?: BalanceModel) {
  }
}
