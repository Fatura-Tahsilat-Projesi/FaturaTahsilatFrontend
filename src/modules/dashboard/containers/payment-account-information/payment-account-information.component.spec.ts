import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAccountInformationComponent } from './payment-account-information.component';

describe('PaymentAccountInformationComponent', () => {
  let component: PaymentAccountInformationComponent;
  let fixture: ComponentFixture<PaymentAccountInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAccountInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
