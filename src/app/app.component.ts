import { Component } from '@angular/core';
import {PTORequest} from './shared/pto-request.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PTO-Angular';
  loadedPage = 'view-requests';

  navigateTo(targetPage: string){
    this.loadedPage = targetPage;
  }
}
