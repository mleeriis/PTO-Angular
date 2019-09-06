import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {PTORequest} from '../../shared/pto-request.model';
import {RequestsService} from '../../services/requests.service';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  constructor(private requestsService: RequestsService, private router: Router, private authService: AuthService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onMakeRequest() {
    const startDate = this.createRequest.value.startDate;
    const endDate = this.createRequest.value.endDate;
    //String. YYYY-MM-DD

    // if (startDate.toDateString() === this.currentDate.toDateString()) {
    //   this.errorMessage = 'PTO cannot start today';
    // }

    //else if ((startDate.getTime() || endDate.getTime()) < this.currentDate.getTime()) {
    //   this.errorMessage = 'Cannot choose a date in the past';
    // } else if (endDate.getTime() < startDate.getTime()) {
    //   this.errorMessage = 'End Date cannot be before Start Date';
    // } else {

    const newRequest = new PTORequest(this.authService.employeeId, this.authService.employeeName, startDate, endDate, 2);


    const requestObs: Observable<object> = this.requestsService.createPtoRequest(newRequest);

    requestObs.subscribe(responseData => {
      this.requestsService.makeRequest(newRequest);
      this.router.navigate(['/view-requests']);
    });

  }

}
