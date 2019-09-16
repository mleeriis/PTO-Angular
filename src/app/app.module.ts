import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ViewRequestsComponent} from './requests/view-requests/view-requests.component';
import {MakeRequestsComponent} from './requests/make-requests/make-requests.component';
import {HrViewComponent} from './hr-view/hr-view.component';
import {FormsModule} from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {CompanyHolidayComponent} from './company-holiday/company-holiday.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpInterceptorService} from './services/http-interceptor.service';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewRequestsComponent,
    MakeRequestsComponent,
    HrViewComponent,
    DropdownDirective,
    AddEmployeeComponent,
    CompanyHolidayComponent,
    LoginComponent,
    PageNotFoundComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
