import {EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PTOInterface} from '../shared/pto-interface';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

export class RequestsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllPTORequests() {
    return this.http.get('http://localhost:8080/pto?page=0&limit=25', this.httpOptions)
      .pipe(
        map(responseData => {
          const ptoArray: PTOInterface[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              ptoArray.push({...responseData[key], arrayIndex: key});
            }
          }
          return ptoArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  getCurrentUsersRequests(employeeID: number) {
    return this.http.get('http://localhost:8080/pto?page=0&limit=25&empID=' + employeeID, this.httpOptions)
      .pipe(
        map(responseData => {
          const ptoArray: PTOInterface[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              ptoArray.push({...responseData[key], arrayIndex: key});
            }
          }
          return ptoArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  // SQL Query to Insert New Request
  // INSERT INTO Requests VALUES ($employeeID, CAST('$startDateISOString' AS datetime),CAST('$endDateISOString' AS datetime), 2);
  // ^ startDate and endDate as strings
  // INSERT INTO Requests VALUES (EmployeeID, StartDate, EndDate, 2);
  createPtoRequest(newRequest: PTOInterface) {
    return this.http.post('http://localhost:8080/pto',
      newRequest, this.httpOptions);
  }


  processRequest(pendingRequestID: number, statusCode: number) {
    return this.http.put('http://localhost:8080/pto/' + pendingRequestID,
      {
        'status': statusCode
      },
      this.httpOptions);
  }

  // SQL Query to update
  // UPDATE Requests SET Status = $statusCode WHERE Id = $requestID;

  deleteRequest(id: number) {
    return this.http.delete('http://localhost:8080/pto/' + id, this.httpOptions);
  }

  /*
  calculateTime(startDate: Date, endDate: Date) {
    let hoursUsed: number;
    if (endDate === startDate) {
      hoursUsed = 8;
      console.log('8hours');
    } else {
      const daysBetween = ((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
      hoursUsed = daysBetween * 8;
    }
  }
  */
}
