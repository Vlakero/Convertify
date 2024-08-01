import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuConversionesUnidadesHogarPage } from './menu-conversiones-unidades-hogar.page';

describe('MenuConversionesUnidadesHogarPage', () => {
  let component: MenuConversionesUnidadesHogarPage;
  let fixture: ComponentFixture<MenuConversionesUnidadesHogarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuConversionesUnidadesHogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
