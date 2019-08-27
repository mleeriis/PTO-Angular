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

const appRoutes: Routes = [
  { path: '', component: ViewRequestsComponent},
  { path: 'make-requests', component: MakeRequestsComponent},
  {path: 'view-requests', component: ViewRequestsComponent},
  {path: 'hr', component: HrViewComponent},
  {path: 'add-employee', component: AddEmployeeComponent}
];

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
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
