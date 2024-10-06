import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLCoreComponentComponent } from './corecomponent.component';

describe('CLCoreComponentComponent', () => {
  let component: CLCoreComponentComponent;
  let fixture: ComponentFixture<CLCoreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLCoreComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLCoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
