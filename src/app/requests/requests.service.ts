import {PTORequest} from '../shared/pto-request.model';
import {EventEmitter, Output} from '@angular/core';

export class RequestsService {
  @Output() requestsUpdated = new EventEmitter<PTORequest[]>();

  private PTORequests: PTORequest[] = [
    new PTORequest(1, 1, new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(2, 1, new Date(2019, 8, 8), new Date(2019, 8, 9), 2),
    new PTORequest(3, 1, new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
    new PTORequest(4, 1, new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(5, 2, new Date(2019, 8, 8), new Date(2019, 8, 9), 1),
    new PTORequest(6, 2, new Date(2019, 8, 8), new Date(2019, 8, 9), 2),
    new PTORequest(7, 2, new Date(2019, 8, 8), new Date(2019, 8, 9), 3),
  ];

  getPTORequests() {
    return this.PTORequests.slice();
  }
}
