import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaDuzenleComponent } from './fatura-duzenle.component';

describe('FaturaDuzenleComponent', () => {
  let component: FaturaDuzenleComponent;
  let fixture: ComponentFixture<FaturaDuzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaDuzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
