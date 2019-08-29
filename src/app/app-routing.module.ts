import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ViewRequestsComponent} from './requests/view-requests/view-requests.component';
import {MakeRequestsComponent} from './requests/make-requests/make-requests.component';
import {HrViewComponent} from './hr-view/hr-view.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {CompanyHolidayComponent} from './company-holiday/company-holiday.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth-guard.service';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'make-requests', component: MakeRequestsComponent},
  {path: 'view-requests', canActivate: [AuthGuard], component: ViewRequestsComponent},
  {path: 'hr', component: HrViewComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'company-holidays', component: CompanyHolidayComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
