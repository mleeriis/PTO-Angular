import { Component } from '@angular/core';
import {RequestsService} from './services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestsService]
})
export class AppComponent {
}
