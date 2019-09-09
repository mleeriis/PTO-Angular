import {PTORequest} from '../shared/pto-request.model';
import {EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PTOInterface} from '../shared/pto-interface';
import {catchError, map, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

export class RequestsService {
  requestsUpdated = new EventEmitter<PTORequest[]>();
  currentEmployeeRequests: PTORequest[] = [];

  ptoInterface: PTOInterface[];


  private PTORequests: PTORequest[] = [
    new PTORequest(37, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 1, 70),
    new PTORequest(37, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 2, 71),
    new PTORequest(1, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
    new PTORequest(1, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(2, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(2, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 2),
    new PTORequest(2, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
  ];

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
              ptoArray.push({...responseData[key], id: key});
            }
          }
          return ptoArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  getCurrentUsersRequests() {
    // const currentRequests: PTORequest[] = [];
    // for (const aRequest of this.PTORequests) {
    //   if (aRequest.EmployeeId === employeeID) {
    //     currentRequests.push(aRequest);
    //   }
    // }
    // this.currentEmployeeRequests = currentRequests;
    // return this.currentEmployeeRequests;
  }

  makeRequest(newRequest: PTORequest) {
    this.PTORequests.push(newRequest);
    this.currentEmployeeRequests.push(newRequest);
    this.requestsUpdated.emit(this.currentEmployeeRequests.slice());
  }

  // SQL Query to Insert New Request
  // INSERT INTO Requests VALUES ($employeeID, CAST('$startDateISOString' AS datetime),CAST('$endDateISOString' AS datetime), 2);
  // ^ startDate and endDate as strings
  // INSERT INTO Requests VALUES (EmployeeID, StartDate, EndDate, 2);
  createPtoRequest(newRequest: PTORequest) {
    return this.http.post('http://localhost:8080/pto',
      {
        'employeeID': newRequest.EmployeeId,
        'startDate': newRequest.StartDate,
        'endDate': newRequest.EndDate,
        'status': newRequest.Status
      }, this.httpOptions);
  }


  processRequest(pendingRequest: PTOInterface, statusCode: number) {
    const requestID = pendingRequest.id;
    return requestID;
  }

  // SQL Query to update
  // UPDATE Requests SET Status = $statusCode WHERE Id = $requestID;

  deleteRequest(id: number) {
    return this.http.delete('http://localhost:8080/pto/' + id, this.httpOptions);
  }

  updateRequestArray(arrayIndex: number) {
    this.PTORequests.splice(arrayIndex, 1);
    this.requestsUpdated.emit(this.PTORequests.slice());
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
