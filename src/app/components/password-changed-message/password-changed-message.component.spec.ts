import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangedMessageComponent } from './password-changed-message.component';

describe('PasswordChangedMessageComponent', () => {
  let component: PasswordChangedMessageComponent;
  let fixture: ComponentFixture<PasswordChangedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordChangedMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
