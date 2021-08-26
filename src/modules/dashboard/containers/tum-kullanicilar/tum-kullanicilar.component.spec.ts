import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumKullanicilarComponent } from './tum-kullanicilar.component';

describe('TumKullanicilarComponent', () => {
  let component: TumKullanicilarComponent;
  let fixture: ComponentFixture<TumKullanicilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumKullanicilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TumKullanicilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
