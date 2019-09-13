import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import {AuthService} from '../../services/auth.service';
import {PTOInterface} from '../../shared/pto-interface';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  currentRequests: PTOInterface[] = [];

  constructor(private requestsService: RequestsService, private authService: AuthService) {
  }

  ngOnInit() {
    this.requestsService.getPtoRequests(this.authService.employeeId).subscribe(ptoRequests => {
      this.currentRequests = ptoRequests;
    });
  }

  private onDelete(id: number, arrayIndex: number) {
    this.requestsService.deleteRequest(id).subscribe();
    this.currentRequests.splice(arrayIndex, 1);
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
}
