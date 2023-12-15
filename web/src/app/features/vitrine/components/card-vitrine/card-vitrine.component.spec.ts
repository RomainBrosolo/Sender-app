import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVitrineComponent } from './card-vitrine.component';

describe('CardVitrineComponent', () => {
  let component: CardVitrineComponent;
  let fixture: ComponentFixture<CardVitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVitrineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
