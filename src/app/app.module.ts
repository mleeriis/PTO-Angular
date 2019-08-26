import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewRequestsComponent } from './requests/view-requests/view-requests.component';
import { MakeRequestsComponent } from './requests/make-requests/make-requests.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { HrViewComponent } from './hr-view/hr-view.component';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewRequestsComponent,
    MakeRequestsComponent,
    EmployeeViewComponent,
    HrViewComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
