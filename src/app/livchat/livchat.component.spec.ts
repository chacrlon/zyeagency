import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivchatComponent } from './livchat.component';

describe('LivchatComponent', () => {
  let component: LivchatComponent;
  let fixture: ComponentFixture<LivchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivchatComponent]
    });
    fixture = TestBed.createComponent(LivchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
