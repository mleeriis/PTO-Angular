import {PTORequest} from '../shared/pto-request.model';
import {EventEmitter} from '@angular/core';

export class RequestsService {
  requestsUpdated = new EventEmitter<PTORequest[]>();
  currentEmployeeRequests: PTORequest[] = [];


  private PTORequests: PTORequest[] = [
    new PTORequest(1, 1, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(2, 1, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 2),
    new PTORequest(3, 1, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
    new PTORequest(4, 1, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(5, 2, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(6, 2, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 2),
    new PTORequest(7, 2, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
  ];

  getPTORequests() {
    return this.PTORequests.slice();
  }

  getCurrentUsersRequests(employeeID: number) {
    const currentRequests: PTORequest[] = [];
    for (const aRequest of this.PTORequests) {
      if (aRequest.EmployeeId === employeeID) {
        currentRequests.push(aRequest);
      }
    }
    this.currentEmployeeRequests = currentRequests;
    return this.currentEmployeeRequests;
  }

  makeRequest(newRequest: PTORequest) {
    const startDateISOString = newRequest.StartDate.toISOString();
    const endDateISOString = newRequest.EndDate.toISOString();
    const employeeID = newRequest.EmployeeId;

    this.PTORequests.push(newRequest);
    //   this.calculateTime(newRequest.StartDate, newRequest.EndDate);
    this.currentEmployeeRequests.push(newRequest);
    this.requestsUpdated.emit(this.currentEmployeeRequests.slice());
  }
  // SQL Query to Insert New Request
  // INSERT INTO Requests VALUES ($employeeID, CAST('$startDateISOString' AS datetime),CAST('$endDateISOString' AS datetime), 2);
  // ^ startDate and endDate as strings
  // INSERT INTO Requests VALUES (EmployeeID, StartDate, EndDate, 2);

  processRequest(pendingRequest: PTORequest, statusCode: number) {
    const requestID = pendingRequest.Id;
    return requestID;
  }

  // SQL Query to update
  // UPDATE Requests SET Status = $statusCode WHERE Id = $requestID;

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
