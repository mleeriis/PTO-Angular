import {Component, Input, OnInit} from '@angular/core';
import {PTORequest} from '../../shared/pto-request.model';
import {RequestsService} from '../requests.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  requestList: PTORequest[];

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit() {
    this.requestList = this.requestsService.getPTORequests();
    this.requestsService.requestsUpdated.subscribe((newRequests: PTORequest[]) => {
      this.requestList = newRequests;
    });
  }

  displayStatusAsString(statusID: number) {
    switch (statusID) {
      case 1:
        return 'Approved';
      case 2:
        return 'Pending';
      case 3:
        return 'Denied';
      default:
        return 'Pending';
    }
  }

}
