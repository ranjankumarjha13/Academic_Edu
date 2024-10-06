import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLStudentListComponent } from './student-list.component';

describe('StudentListComponent', () => {
  let component: CLStudentListComponent;
  let fixture: ComponentFixture<CLStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
