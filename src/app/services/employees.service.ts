import {Employee} from '../shared/employee.model';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../../environments/environment';


export class EmployeesService {
  readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.API_URL + 'employees')
      .pipe(
        map(responseData => {
          const employeeArray: Employee[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              employeeArray.push({...responseData[key], arrayIndex: key});
            }
          }
          return employeeArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes.message);
        })
      );
  }

  createEmployee(newEmployee: Employee) {
    return this.http.post(this.API_URL + 'employees', {
      'firstname': newEmployee.firstname,
      'lastname': newEmployee.lastname,
      'email': newEmployee.email,
      'roleID': newEmployee.roleID,
      'password': newEmployee.password
    });
  }

  changePassword(email: string, password: string){
    return this.http.put(this.API_URL + 'employees/' + email, {
      'password': password
    });
  }
}
