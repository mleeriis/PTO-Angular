import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

describe('Login Component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const authServiceSpy = jasmine.createSpyObj('AuthService',['authenticate', 'getData']);

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [
          {provide: AuthService, useValue: authServiceSpy},
          {provide: Router, useValue: routerSpy}],
        imports: [BrowserModule,
          FormsModule]
      });
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should call the onSubmit method', async(() => {
      const el: HTMLElement = fixture.nativeElement;
      const buttonEl = el.querySelector('button');
      fixture.detectChanges();
      spyOn(component, 'onLogin');
      buttonEl.click();
      expect(component.onLogin).toHaveBeenCalled();
    }
  ));

  it('form should be invalid when email is of incorrect format', async(() => {
      component.loginForm.form.setValue({email: 't', password: 'p'});
      expect(component.loginForm.valid).toBeFalsy();
    })
  );

  it('form should be invalid when inputs are blank', async(() => {
      component.loginForm.form.setValue({email: '', password: ''});
      expect(component.loginForm.valid).toBeFalsy();
    })
  );

  it('form should be valid when inputs are correct', async(() => {
      component.loginForm.form.setValue({email: 't@t', password: 'p'});
      expect(component.loginForm.valid).toBeTruthy();
    })
  );

  it('validation messages appear when form is touched, but blank', async(() => {
      component.loginForm.form.setValue({email: '', password: ''});
      component.loginForm.form.markAllAsTouched();

      fixture.detectChanges();
      const validationError = fixture.debugElement.query(By.css('.help-block'));
      expect(validationError).toBeTruthy();
    })
  );

});
