import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponentComponent } from './slider.component';

describe('SliderComponentComponent', () => {
  let component: SliderComponentComponent;
  let fixture: ComponentFixture<SliderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
