import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HilyComponent } from './hily.component';

describe('HilyComponent', () => {
  let component: HilyComponent;
  let fixture: ComponentFixture<HilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HilyComponent]
    });
    fixture = TestBed.createComponent(HilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
