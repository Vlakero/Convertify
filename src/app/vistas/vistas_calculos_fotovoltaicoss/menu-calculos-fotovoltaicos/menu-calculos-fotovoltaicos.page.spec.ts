import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCalculosfotoPage } from './menu-calculos-fotovoltaicos.page';

describe('MenuCalculosfotoPage', () => {
  let component: MenuCalculosfotoPage;
  let fixture: ComponentFixture<MenuCalculosfotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuCalculosfotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
