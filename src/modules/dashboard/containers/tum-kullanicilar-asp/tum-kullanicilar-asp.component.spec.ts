import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumKullanicilarAspComponent } from './tum-kullanicilar-asp.component';

describe('TumKullanicilarAspComponent', () => {
  let component: TumKullanicilarAspComponent;
  let fixture: ComponentFixture<TumKullanicilarAspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumKullanicilarAspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TumKullanicilarAspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
