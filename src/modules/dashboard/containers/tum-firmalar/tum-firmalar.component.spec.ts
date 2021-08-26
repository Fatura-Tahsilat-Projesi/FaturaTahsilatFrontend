import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumFirmalarComponent } from './tum-firmalar.component';

describe('TumFirmalarComponent', () => {
  let component: TumFirmalarComponent;
  let fixture: ComponentFixture<TumFirmalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumFirmalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TumFirmalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
