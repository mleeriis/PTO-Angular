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
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
