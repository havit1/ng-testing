/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {}
}

class ActivatedRouteStub {
  get params() {
    return this.subject.asObservable();
  }

  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UserDetailsComponent],
        providers: [
          {
            provide: Router,
            useClass: RouterStub,
          },
          {
            provide: ActivatedRoute,
            useClass: ActivatedRouteStub,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the users page after saving', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate the user to the not found page when invalid id', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    let route = TestBed.inject(ActivatedRoute);
    ((route as unknown) as ActivatedRouteStub).push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
