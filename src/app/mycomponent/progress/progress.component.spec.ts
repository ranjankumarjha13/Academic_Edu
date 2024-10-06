import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLProgressComponent } from './progress.component';

describe('CLProgressComponent', () => {
  let component: CLProgressComponent;
  let fixture: ComponentFixture<CLProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
