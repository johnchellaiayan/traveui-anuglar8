import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiscenseExpiredDriversComponent } from './liscense-expired-drivers.component';

describe('LiscenseExpiredDriversComponent', () => {
  let component: LiscenseExpiredDriversComponent;
  let fixture: ComponentFixture<LiscenseExpiredDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiscenseExpiredDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiscenseExpiredDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
