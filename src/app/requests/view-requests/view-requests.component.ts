import {Component, OnInit} from '@angular/core';
import {PTORequest} from '../../shared/pto-request.model';
import {RequestsService} from '../../services/requests.service';
import {AuthService} from '../../services/auth.service';
import {PTOInterface} from '../../shared/pto-interface';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  currentEmployeeRequests: PTORequest[];
  currentRequests: PTOInterface[] = [];

  constructor(private requestsService: RequestsService, private authService: AuthService) {
  }

  ngOnInit() {
    this.requestsService.getCurrentUsersRequests().subscribe(ptoRequests => {
      this.currentRequests = ptoRequests;
    });

    // this.currentEmployeeRequests = this.requestsService.getCurrentUsersRequests(this.authService.employeeId);
    this.requestsService.requestsUpdated.subscribe((newRequests: PTORequest[]) => {
      this.currentEmployeeRequests = newRequests;
    });
  }

  private displayStatusAsString(statusID: number) {
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

  private convertHTMLToDate(inputDate: string) {
    return (new Date(new Date(inputDate).toLocaleString('en-US', {timeZone: 'UTC'}))).toString().substring(0, 16);
  }

  private onDelete(id: number, arrayIndex: number) {
    const requestSub = this.requestsService.deleteRequest(id).subscribe((responseData) => {
      console.log(responseData);
    });

    this.requestsService.updateRequestArray(arrayIndex);

    // requestSub.unsubscribe();
  }

  private getAllRequests() {
    this.requestsService.getCurrentUsersRequests().subscribe(ptoRequests => {
      this.currentRequests = ptoRequests;
    });
  }
}
