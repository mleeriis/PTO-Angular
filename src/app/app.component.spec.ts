import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {ViewRequestsComponent} from './requests/view-requests/view-requests.component';
import {MakeRequestsComponent} from './requests/make-requests/make-requests.component';
import {HrViewComponent} from './hr-view/hr-view.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {CompanyHolidayComponent} from './company-holiday/company-holiday.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ChangePasswordComponent} from './change-password/change-password.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [AuthGuard, AuthService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
