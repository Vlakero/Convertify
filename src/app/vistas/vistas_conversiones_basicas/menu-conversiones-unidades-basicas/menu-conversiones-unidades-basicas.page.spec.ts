import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuConversionesUnidadesBasicasPage } from './menu-conversiones-unidades-basicas.page';


describe('MenuConversionesUnidadesBasicasPage', () => {
  let component: MenuConversionesUnidadesBasicasPage;
  let fixture: ComponentFixture<MenuConversionesUnidadesBasicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuConversionesUnidadesBasicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
