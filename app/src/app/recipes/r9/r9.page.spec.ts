import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R9Page } from './r9.page';

describe('R9Page', () => {
  let component: R9Page;
  let fixture: ComponentFixture<R9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
