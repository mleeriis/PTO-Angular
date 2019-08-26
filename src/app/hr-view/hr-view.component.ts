import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../requests/requests.service';
import {PTORequest} from '../shared/pto-request.model';

@Component({
  selector: 'app-hr-view',
  templateUrl: './hr-view.component.html',
  styleUrls: ['./hr-view.component.css']
})
export class HrViewComponent implements OnInit {
  allRequests: PTORequest[];
  approvedRequests: PTORequest[];
  pendingRequests: PTORequest[];
  deniedRequests: PTORequest[];

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit() {
    this.allRequests = this.requestsService.getPTORequests();
  }

}
