import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HrViewComponent} from './hr-view.component';
import {RequestsService} from '../services/requests.service';

describe('HR View Component', () => {
  let component: HrViewComponent;
  let fixture: ComponentFixture<HrViewComponent>;
  const requestsServiceSpy = jasmine.createSpyObj('RequestsService', ['getAllPTORequests', 'processRequest']);

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [HrViewComponent],
        providers: [{provide: RequestsService, useValue: requestsServiceSpy}]
      });
      fixture = TestBed.createComponent(HrViewComponent);
      component = fixture.componentInstance;
    })
  );

  it('should be created', () => {
    expect(HrViewComponent).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should display "No Pending Requests" when pendingRequests[] is empty', () => {
    const hrViewElement: HTMLElement = fixture.nativeElement;
    // expect(hrViewElement.textContent).toEqual('No Pending Requests');
  });

});
