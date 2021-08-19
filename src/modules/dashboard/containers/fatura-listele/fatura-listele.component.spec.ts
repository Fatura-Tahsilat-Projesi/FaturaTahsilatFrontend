import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaListeleComponent } from './fatura-listele.component';

describe('FaturaListeleComponent', () => {
  let component: FaturaListeleComponent;
  let fixture: ComponentFixture<FaturaListeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaListeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaListeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
