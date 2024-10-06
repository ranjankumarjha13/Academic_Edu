import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLPaymentComponent } from './payment.component';

describe('CLPaymentComponent', () => {
  let component: CLPaymentComponent;
  let fixture: ComponentFixture<CLPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
