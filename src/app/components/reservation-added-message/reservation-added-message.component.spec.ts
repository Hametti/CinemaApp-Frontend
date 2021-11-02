import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAddedMessageComponent } from './reservation-added-message.component';

describe('ReservationAddedMessageComponent', () => {
  let component: ReservationAddedMessageComponent;
  let fixture: ComponentFixture<ReservationAddedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAddedMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationAddedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
