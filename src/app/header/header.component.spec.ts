import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {AuthService} from '../services/auth.service';
import {AppRoutingModule} from '../app-routing.module';
import {AppComponent} from '../app.component';
import {ViewRequestsComponent} from '../requests/view-requests/view-requests.component';
import {MakeRequestsComponent} from '../requests/make-requests/make-requests.component';
import {HrViewComponent} from '../hr-view/hr-view.component';
import {DropdownDirective} from '../shared/dropdown.directive';
import {AddEmployeeComponent} from '../add-employee/add-employee.component';
import {CompanyHolidayComponent} from '../company-holiday/company-holiday.component';
import {LoginComponent} from '../login/login.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '../services/auth-guard.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
        PageNotFoundComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
      ],
      providers: [AuthGuard, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
