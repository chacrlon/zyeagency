import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukiComponent } from './suki.component';

describe('SukiComponent', () => {
  let component: SukiComponent;
  let fixture: ComponentFixture<SukiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SukiComponent]
    });
    fixture = TestBed.createComponent(SukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
