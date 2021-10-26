import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningDaysComponent } from './screening-days.component';

describe('ScreeningDaysComponent', () => {
  let component: ScreeningDaysComponent;
  let fixture: ComponentFixture<ScreeningDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
