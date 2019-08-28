import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ViewRequestsComponent} from './requests/view-requests/view-requests.component';
import {MakeRequestsComponent} from './requests/make-requests/make-requests.component';
import {EmployeeViewComponent} from './employee-view/employee-view.component';
import {HrViewComponent} from './hr-view/hr-view.component';
import {RequestsComponent} from './requests/requests.component';
import {FormsModule} from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import { CompanyHolidayComponent } from './company-holiday/company-holiday.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewRequestsComponent,
    MakeRequestsComponent,
    EmployeeViewComponent,
    HrViewComponent,
    RequestsComponent,
    DropdownDirective,
    AddEmployeeComponent,
    CompanyHolidayComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
