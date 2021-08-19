import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaOlusturComponent } from './fatura-olustur.component';

describe('FaturaOlusturComponent', () => {
  let component: FaturaOlusturComponent;
  let fixture: ComponentFixture<FaturaOlusturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaOlusturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaOlusturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
