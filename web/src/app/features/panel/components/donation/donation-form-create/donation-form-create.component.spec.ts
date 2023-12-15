import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationFormCreateComponent } from './donation-form-create.component';

describe('DonationFormCreateComponent', () => {
  let component: DonationFormCreateComponent;
  let fixture: ComponentFixture<DonationFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
