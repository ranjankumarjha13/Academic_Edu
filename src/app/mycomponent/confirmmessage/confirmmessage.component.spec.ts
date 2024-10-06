import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLConfirmmessageComponent } from './confirmmessage.component';

describe('CLConfirmmessageComponent', () => {
  let component: CLConfirmmessageComponent;
  let fixture: ComponentFixture<CLConfirmmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLConfirmmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLConfirmmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
