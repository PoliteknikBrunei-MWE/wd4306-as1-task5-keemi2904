import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hotel4Page } from './hotel4.page';

describe('Hotel4Page', () => {
  let component: Hotel4Page;
  let fixture: ComponentFixture<Hotel4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Hotel4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
