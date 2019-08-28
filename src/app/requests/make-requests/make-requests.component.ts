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


  constructor(private requestsService: RequestsService, private router: Router) {
  }

  ngOnInit() {
  }

  makeRequest() {
    const startDate = new Date(this.createRequest.value.startDate);
    const endDate = new Date(this.createRequest.value.endDate);
    const newRequest = new PTORequest(1, 'Maria Lee', startDate, endDate, 2);
    this.requestsService.makeRequest(newRequest);
    this.router.navigate(['/view-requests']);
  }

}
