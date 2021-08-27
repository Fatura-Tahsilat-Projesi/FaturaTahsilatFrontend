import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaDuzenleComponent } from './firma-duzenle.component';

describe('FirmaDuzenleComponent', () => {
  let component: FirmaDuzenleComponent;
  let fixture: ComponentFixture<FirmaDuzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmaDuzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
