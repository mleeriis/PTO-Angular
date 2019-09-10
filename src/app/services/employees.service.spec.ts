import {TestBed, inject} from '@angular/core/testing';
import {EmployeesService} from './employees.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let httpTestingController: HttpTestingController;
  let service: EmployeesService;
  const apiUrl = 'http://localhost:8080/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesService],
      imports: [
        HttpClientTestingModule
      ],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EmployeesService);
  });

  afterEach(inject([HttpTestingController], () => {
    httpTestingController.verify();
  }));

  it('should be created', () => {
    expect(EmployeesService).toBeTruthy();
  });

  it('getEmployees returns data',
    () => {
      const dummyEmployees = [
        {
          firstname: 'John',
          lastname: 'Doe', email: 'test@test.com', roleID: 2, password: 'password', arrayIndex: '0'
        },
        {
          firstname: 'Jane',
          lastname: 'Doe', email: 'test2@test.com', roleID: 1, password: 'password', arrayIndex: '1'
        }
      ];

      service.getEmployees().subscribe(employees => {
        expect(employees.length).toBe(2);
        expect(employees).toEqual(dummyEmployees);
      });

      const req = httpTestingController.expectOne(apiUrl + 'employees');
      expect(req.request.method).toEqual('GET');
      expect(req.request.responseType).toEqual('json');

      req.flush(dummyEmployees);
    });


  it('returned Observable should match the input data', () => {
    const dummyEmployee = {
      firstname: 'John',
      lastname: 'Doe', email: 'test@test.com', roleID: 2, password: 'password', arrayIndex: '0'
    };

    service.createEmployee(dummyEmployee)
      .subscribe((resData) => {
        expect(resData).toEqual(dummyEmployee);
      });

    const req = httpTestingController.expectOne(apiUrl + 'employees');
    expect(req.request.method).toEqual('POST');
    expect(req.request.responseType).toEqual('json');

    req.flush(dummyEmployee);
  });
});
