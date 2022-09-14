import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelStaffComponent } from './del-staff.component';

describe('DelStaffComponent', () => {
  let component: DelStaffComponent;
  let fixture: ComponentFixture<DelStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
