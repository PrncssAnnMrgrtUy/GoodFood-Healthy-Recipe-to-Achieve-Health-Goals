import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R7Page } from './r7.page';

describe('R7Page', () => {
  let component: R7Page;
  let fixture: ComponentFixture<R7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
