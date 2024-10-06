import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLDashboardComponent } from './dashboard.component';

describe('CLDashboardComponent', () => {
  let component: CLDashboardComponent;
  let fixture: ComponentFixture<CLDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
