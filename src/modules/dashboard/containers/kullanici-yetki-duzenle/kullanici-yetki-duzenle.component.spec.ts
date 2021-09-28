import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciYetkiDuzenleComponent } from './kullanici-yetki-duzenle.component';

describe('KullaniciYetkiDuzenleComponent', () => {
  let component: KullaniciYetkiDuzenleComponent;
  let fixture: ComponentFixture<KullaniciYetkiDuzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciYetkiDuzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciYetkiDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
