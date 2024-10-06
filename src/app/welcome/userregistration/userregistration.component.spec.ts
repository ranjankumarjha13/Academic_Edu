import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLUserregistrationComponent } from './userregistration.component';

describe('UserregistrationComponent', () => {
  let component: CLUserregistrationComponent;
  let fixture: ComponentFixture<CLUserregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLUserregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLUserregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
