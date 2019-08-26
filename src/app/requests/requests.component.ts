import {Component, OnInit} from '@angular/core';
import {PTORequest} from '../shared/pto-request.model';
import {RequestsService} from './requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  allRequests: PTORequest[];

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit() {
  }
}
