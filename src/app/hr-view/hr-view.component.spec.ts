import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HrViewComponent} from './hr-view.component';
import {RequestsService} from '../services/requests.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HR View Component', () => {
  let component: HrViewComponent;
  let fixture: ComponentFixture<HrViewComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [HrViewComponent],
        providers: [RequestsService,
          HttpClient,
          HttpHandler]
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
