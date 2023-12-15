import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorFormCreateComponent } from './contributor-form-create.component';

describe('ContributorFormCreateComponent', () => {
  let component: ContributorFormCreateComponent;
  let fixture: ComponentFixture<ContributorFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
