import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDeletedMessageComponent } from './account-deleted-message.component';

describe('AccountDeletedMessageComponent', () => {
  let component: AccountDeletedMessageComponent;
  let fixture: ComponentFixture<AccountDeletedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDeletedMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDeletedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
