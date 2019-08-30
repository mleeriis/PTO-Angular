import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ViewRequestsComponent} from './requests/view-requests/view-requests.component';
import {MakeRequestsComponent} from './requests/make-requests/make-requests.component';
import {HrViewComponent} from './hr-view/hr-view.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {CompanyHolidayComponent} from './company-holiday/company-holiday.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/auth-guard.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'view-requests', pathMatch: 'full'},
  { path: 'make-requests', canActivate: [AuthGuard], component: MakeRequestsComponent},
  {path: 'view-requests', canActivate: [AuthGuard], component: ViewRequestsComponent},
  {path: 'hr', canActivate: [AuthGuard], component: HrViewComponent},
  {path: 'add-employee', canActivate: [AuthGuard], component: AddEmployeeComponent},
  {path: 'company-holidays', canActivate: [AuthGuard], component: CompanyHolidayComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
