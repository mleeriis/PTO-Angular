import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {PTORequest} from '../../shared/pto-request.model';
import {RequestsService} from '../../services/requests.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-make-requests',
  templateUrl: './make-requests.component.html',
  styleUrls: ['./make-requests.component.css']
})
export class MakeRequestsComponent implements OnInit {
  @ViewChild('createRequestForm', {static: true}) createRequest: NgForm;

  @Output() requestMade = new EventEmitter<PTORequest>();

  errorMessage = '';

  currentDate: Date = new Date();
  currentDateString: string = this.currentDate.toISOString().substr(0, 10);

  constructor(private requestsService: RequestsService, private router: Router) {
  }

  ngOnInit() {
  }

  onMakeRequest() {
    const startDate = this.convertHTMLDate(this.createRequest.value.startDate);
    const endDate = this.convertHTMLDate(this.createRequest.value.endDate);

    if (startDate.toDateString() === this.currentDate.toDateString()) {
      this.errorMessage = 'PTO cannot start today';
    } else if ((startDate.getTime() || endDate.getTime()) < this.currentDate.getTime()) {
      this.errorMessage = 'Cannot choose a date in the past';
    } else if (endDate.getTime() < startDate.getTime()) {
      this.errorMessage = 'End Date cannot be before Start Date';
    } else {
      const newRequest = new PTORequest(1, 'Maria Lee', startDate, endDate, 2);
      this.requestsService.makeRequest(newRequest);
      this.router.navigate(['/view-requests']);
    }
  }

  private convertHTMLDate(inputDate: string) {
    return (new Date(new Date(inputDate).toLocaleString('en-US', {timeZone: 'UTC'})));
  }

}
