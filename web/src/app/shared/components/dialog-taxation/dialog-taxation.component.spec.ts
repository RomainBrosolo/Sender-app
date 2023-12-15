import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaxationComponent } from './dialog-taxation.component';

describe('DialogTaxationComponent', () => {
  let component: DialogTaxationComponent;
  let fixture: ComponentFixture<DialogTaxationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaxationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTaxationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
