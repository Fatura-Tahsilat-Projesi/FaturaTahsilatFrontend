import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciDuzenleComponent } from './kullanici-duzenle.component';

describe('KullaniciDuzenleComponent', () => {
  let component: KullaniciDuzenleComponent;
  let fixture: ComponentFixture<KullaniciDuzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciDuzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
