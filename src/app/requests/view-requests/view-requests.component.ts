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

}
