import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCreditCardComponent } from './update-credit-card.component';

describe('UpdateCreditCardComponent', () => {
  let component: UpdateCreditCardComponent;
  let fixture: ComponentFixture<UpdateCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
