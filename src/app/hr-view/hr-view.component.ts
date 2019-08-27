import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../services/requests.service';
import {PTORequest} from '../shared/pto-request.model';

@Component({
  selector: 'app-hr-view',
  templateUrl: './hr-view.component.html',
  styleUrls: ['./hr-view.component.css']
})
export class HrViewComponent implements OnInit {
  allRequests: PTORequest[] = [];
  approvedRequests: PTORequest[] = [];
  pendingRequests: PTORequest[] = [];
  deniedRequests: PTORequest[] = [];

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit() {
    this.allRequests = this.requestsService.getPTORequests();
    this.sortRequests();
  }

  sortRequests() {
    for (let entry of this.allRequests) {
      switch (entry.Status) {
        case 1:
          this.approvedRequests.push(entry);
          break;
        case 2:
          this.pendingRequests.push(entry);
          break;
        case 3:
          this.deniedRequests.push(entry);
          break;
        default:
          this.pendingRequests.push(entry);
      }
    }
  }

}

