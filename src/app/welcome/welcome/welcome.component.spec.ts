import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLWelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: CLWelcomeComponent;
  let fixture: ComponentFixture<CLWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
