import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hotel1Page } from './hotel1.page';

describe('Hotel1Page', () => {
  let component: Hotel1Page;
  let fixture: ComponentFixture<Hotel1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Hotel1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
