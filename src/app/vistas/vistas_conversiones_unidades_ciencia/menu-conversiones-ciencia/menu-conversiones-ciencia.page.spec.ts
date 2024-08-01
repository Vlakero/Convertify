import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuConversionesCienciaPage } from './menu-conversiones-ciencia.page';

describe('MenuConversionesCienciaPage', () => {
  let component: MenuConversionesCienciaPage;
  let fixture: ComponentFixture<MenuConversionesCienciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuConversionesCienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
