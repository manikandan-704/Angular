import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCounter } from './display-counter';

describe('DisplayCounter', () => {
  let component: DisplayCounter;
  let fixture: ComponentFixture<DisplayCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
