import {TestBed} from '@angular/core/testing';
import {EmployeesService} from '../services/employees.service';
import {AddEmployeeComponent} from './add-employee.component';

describe('Add Employee Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesService],
      imports: [],
    });
  });

  it('should be created', () => {
    expect(AddEmployeeComponent).toBeTruthy();
  });

});
