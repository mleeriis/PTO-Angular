import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {PTORequest} from '../../shared/pto-request.model';
import {RequestsService} from '../../services/requests.service';

@Component({
  selector: 'app-make-requests',
  templateUrl: './make-requests.component.html',
  styleUrls: ['./make-requests.component.css']
})
export class MakeRequestsComponent implements OnInit {
  @ViewChild('requestStartDate', {static: true}) requestedStartDate: ElementRef;
  @ViewChild('requestEndDate', {static: true}) requestedEndDate: ElementRef;

  @Output() requestMade = new EventEmitter<PTORequest>();


  constructor(private requestsService: RequestsService, private router: Router) {
  }

  ngOnInit() {
  }

  makeRequest() {
    const startDate = this.requestedStartDate.nativeElement.value;
    const endDate = this.requestedEndDate.nativeElement.value;
    const newRequest = new PTORequest(1, 1, startDate, endDate, 2);
    this.requestsService.makeRequest(newRequest);
    this.router.navigate(['/view-requests']);
  }

}
