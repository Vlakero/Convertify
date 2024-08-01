import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCalculosMotorPage } from './menu-calculos-motor.page';

describe('MenuCalculosMotorPage', () => {
  let component: MenuCalculosMotorPage;
  let fixture: ComponentFixture<MenuCalculosMotorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuCalculosMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
