import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../services/requests.service';
import {PTOInterface} from '../shared/pto-interface';

@Component({
  selector: 'app-hr-view',
  templateUrl: './hr-view.component.html',
  styleUrls: ['./hr-view.component.css']
})
export class HrViewComponent implements OnInit {
  allRequests: PTOInterface[] = [];
  approvedRequests: PTOInterface[] = [];
  pendingRequests: PTOInterface[] = [];
  deniedRequests: PTOInterface[] = [];

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit() {
    this.requestsService.getAllPTORequests().subscribe(ptoRequests => {
      this.allRequests = ptoRequests;
      this.sortRequests();
    });
  }

  onProcessRequest(pendingRequest: PTOInterface, arrayIndex: number, change: string) {
    if (change === 'approve') {
      pendingRequest.status = 1;
      this.requestsService.processRequest(pendingRequest, 1);
      this.approvedRequests.push(pendingRequest);
    } else {
      pendingRequest.status = 3;
      this.requestsService.processRequest(pendingRequest, 3);
      this.deniedRequests.push(pendingRequest);
    }
    this.pendingRequests.splice(arrayIndex, 1);
  }

  private sortRequests() {
    console.log(this.allRequests);
    for (const entry of this.allRequests) {
      console.log(entry);
      switch (entry.status) {
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

  private convertHTMLToDate(inputDate: string) {
    return (new Date(new Date(inputDate).toLocaleString('en-US', {timeZone: 'UTC'}))).toString().substring(0, 16);
  }
}


