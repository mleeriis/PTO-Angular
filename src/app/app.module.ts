import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { MakeRequestsComponent } from './make-requests/make-requests.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { HrViewComponent } from './hr-view/hr-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewRequestsComponent,
    MakeRequestsComponent,
    EmployeeViewComponent,
    HrViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
