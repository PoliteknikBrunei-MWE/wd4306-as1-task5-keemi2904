import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hotel3Page } from './hotel3.page';

describe('Hotel3Page', () => {
  let component: Hotel3Page;
  let fixture: ComponentFixture<Hotel3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Hotel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
