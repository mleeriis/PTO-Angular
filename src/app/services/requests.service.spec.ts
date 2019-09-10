import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RequestsService} from './requests.service';

describe('RequestsService', () => {
  let httpTestingController: HttpTestingController;
  let service: RequestsService;
  const apiUrl = 'http://localhost:8080/';

  const dummyRequest = {
    employeeID: 1,
    startDate: '2019-09-10',
    endDate: '2019-09-11',
    status: 2
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsService],
      imports: [
        HttpClientTestingModule
      ],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RequestsService);
  });

  afterEach(inject([HttpTestingController], () => {
    httpTestingController.verify();
  }));

  it('should be created', () => {
    expect(RequestsService).toBeTruthy();
  });

  it('#createPtoRequest(), should send POST request to API', () => {
    service.createPtoRequest(dummyRequest).subscribe((resData) => {
      expect(resData).toEqual(dummyRequest);
    });

    const req = httpTestingController.expectOne(apiUrl + 'pto');
    expect(req.request.method).toEqual('POST');
    expect(req.request.responseType).toEqual('json');

    req.flush(dummyRequest);
  });
});
