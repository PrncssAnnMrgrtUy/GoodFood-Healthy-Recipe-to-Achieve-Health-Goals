import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R19Page } from './r19.page';

describe('R19Page', () => {
  let component: R19Page;
  let fixture: ComponentFixture<R19Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
