import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorFormEditComponent } from './contributor-form-edit.component';

describe('ProductFormEditComponent', () => {
  let component: ContributorFormEditComponent;
  let fixture: ComponentFixture<ContributorFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributorFormEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
