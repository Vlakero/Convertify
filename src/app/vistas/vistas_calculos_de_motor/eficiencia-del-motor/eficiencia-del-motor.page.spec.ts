import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EficienciaDelMotorPage } from './eficiencia-del-motor.page';

describe('EficienciaDelMotorPage', () => {
  let component: EficienciaDelMotorPage;
  let fixture: ComponentFixture<EficienciaDelMotorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EficienciaDelMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
