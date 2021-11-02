import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisteredMessageComponent } from './account-registered-message.component';

describe('AccountRegisteredMessageComponent', () => {
  let component: AccountRegisteredMessageComponent;
  let fixture: ComponentFixture<AccountRegisteredMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRegisteredMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRegisteredMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
