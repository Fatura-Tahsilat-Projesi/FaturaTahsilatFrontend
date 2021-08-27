import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaHareketleriComponent } from './fatura-hareketleri.component';

describe('FaturaHareketleriComponent', () => {
  let component: FaturaHareketleriComponent;
  let fixture: ComponentFixture<FaturaHareketleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaHareketleriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaHareketleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
