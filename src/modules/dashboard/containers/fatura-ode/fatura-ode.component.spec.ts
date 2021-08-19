import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaOdeComponent } from './fatura-ode.component';

describe('FaturaOdeComponent', () => {
  let component: FaturaOdeComponent;
  let fixture: ComponentFixture<FaturaOdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaOdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaOdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
