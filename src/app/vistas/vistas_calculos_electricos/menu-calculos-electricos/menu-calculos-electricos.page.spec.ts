import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCalculosElectricosPage } from './menu-calculos-electricos.page';

describe('MenuCalculosElectricosPage', () => {
  let component: MenuCalculosElectricosPage;
  let fixture: ComponentFixture<MenuCalculosElectricosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuCalculosElectricosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
