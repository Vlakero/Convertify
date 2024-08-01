import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactorPotenciaMotorPage } from './factor-potencia-motor.page';

describe('FactorPotenciaMotorPage', () => {
  let component: FactorPotenciaMotorPage;
  let fixture: ComponentFixture<FactorPotenciaMotorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FactorPotenciaMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
