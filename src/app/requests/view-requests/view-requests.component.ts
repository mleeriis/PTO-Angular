import {Component, Input, OnInit} from '@angular/core';
import {PTORequest} from '../../shared/pto-request.model';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  @Input() requestList: PTORequest[];

  constructor() { }

  ngOnInit() {
  }

}
