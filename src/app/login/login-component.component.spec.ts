import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLLoginComponentComponent } from './login-component.component';

describe('CLLoginComponentComponent', () => {
  let component: CLLoginComponentComponent;
  let fixture: ComponentFixture<CLLoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLLoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
