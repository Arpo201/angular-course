import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDataBindingComponent } from './assignment-data-binding.component';

describe('AssignmentDataBindingComponent', () => {
  let component: AssignmentDataBindingComponent;
  let fixture: ComponentFixture<AssignmentDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
