import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciOlusturComponent } from './kullanici-olustur.component';

describe('KullaniciOlusturComponent', () => {
  let component: KullaniciOlusturComponent;
  let fixture: ComponentFixture<KullaniciOlusturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciOlusturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciOlusturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
