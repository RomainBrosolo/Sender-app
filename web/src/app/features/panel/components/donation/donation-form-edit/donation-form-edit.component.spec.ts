import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationFormEditComponent } from './donation-form-edit.component';

describe('ProductFormEditComponent', () => {
  let component: DonationFormEditComponent;
  let fixture: ComponentFixture<DonationFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationFormEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
