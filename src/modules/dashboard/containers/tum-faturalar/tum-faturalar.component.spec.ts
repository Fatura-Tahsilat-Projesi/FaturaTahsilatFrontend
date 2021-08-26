import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumFaturalarComponent } from './tum-faturalar.component';

describe('TumFaturalarComponent', () => {
  let component: TumFaturalarComponent;
  let fixture: ComponentFixture<TumFaturalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumFaturalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TumFaturalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
