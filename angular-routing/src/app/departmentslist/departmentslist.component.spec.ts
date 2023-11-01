import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentslistComponent } from './departmentslist.component';

describe('DepartmentslistComponent', () => {
  let component: DepartmentslistComponent;
  let fixture: ComponentFixture<DepartmentslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentslistComponent]
    });
    fixture = TestBed.createComponent(DepartmentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
