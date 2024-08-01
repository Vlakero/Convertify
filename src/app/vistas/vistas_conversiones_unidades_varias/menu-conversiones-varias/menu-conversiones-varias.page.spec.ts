import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuConversionesVariasPage } from './menu-conversiones-varias.page';

describe('MenuConversionesVariasPage', () => {
  let component: MenuConversionesVariasPage;
  let fixture: ComponentFixture<MenuConversionesVariasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuConversionesVariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
