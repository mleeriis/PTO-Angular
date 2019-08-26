import { Component, OnInit } from '@angular/core';
import {PTORequest} from '../shared/pto-request.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  dummyRequests: PTORequest[] = [
    new PTORequest(1,1,new Date(2019,8,8), new Date(2019,8,9),1),
    new PTORequest(2,1,new Date(2019,8,8), new Date(2019,8,9),2),
    new PTORequest(3,1,new Date(2019,8,8), new Date(2019,8,9),3),
    new PTORequest(4,1,new Date(2019,8,8), new Date(2019,8,9),1),
    new PTORequest(5,2,new Date(2019,8,8), new Date(2019,8,9),1),
    new PTORequest(6,2,new Date(2019,8,8), new Date(2019,8,9),2),
    new PTORequest(7,2,new Date(2019,8,8), new Date(2019,8,9),3),
  ];

  constructor() { }

  ngOnInit() {
  }

  updateRequests(newRequest: PTORequest){
    this.dummyRequests.push(newRequest);
  }
}
