import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaOlusturComponent } from './firma-olustur.component';

describe('FirmaOlusturComponent', () => {
  let component: FirmaOlusturComponent;
  let fixture: ComponentFixture<FirmaOlusturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmaOlusturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaOlusturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
