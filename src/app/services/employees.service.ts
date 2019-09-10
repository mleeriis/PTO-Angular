import {Employee} from '../shared/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';


export class EmployeesService {
  readonly API_URL = 'http://localhost:8080/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.API_URL + 'employees', this.httpOptions)
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
    }, this.httpOptions);
  }
}
