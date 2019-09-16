import {TestBed} from '@angular/core/testing';
import {EmployeesService} from '../services/employees.service';
import {ChangePasswordComponent} from './change-password.component';

describe('Add Employee Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesService]
    });
  });

  it('should be created', () => {
    expect(ChangePasswordComponent).toBeTruthy();
  });

});
