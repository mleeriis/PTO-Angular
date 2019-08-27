import {PTORequest} from '../shared/pto-request.model';
import {EventEmitter} from '@angular/core';

export class RequestsService {
  requestsUpdated = new EventEmitter<PTORequest[]>();

  private PTORequests: PTORequest[] = [
    new PTORequest(1, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(2, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 2),
    new PTORequest(3, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
    new PTORequest(4, 'Jillian Marcotte', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(5, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(6, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 2),
    new PTORequest(7, 'Maria Lee', new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
  ];

  getPTORequests() {
    return this.PTORequests.slice();
  }

  makeRequest(newRequest: PTORequest) {
    this.PTORequests.push(newRequest);
    this.requestsUpdated.emit(this.PTORequests.slice());
  }
}
