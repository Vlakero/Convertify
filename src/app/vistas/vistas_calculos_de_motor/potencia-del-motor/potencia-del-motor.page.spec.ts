import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PotenciaDelMotorPage } from './potencia-del-motor.page';

describe('PotenciaDelMotorPage', () => {
  let component: PotenciaDelMotorPage;
  let fixture: ComponentFixture<PotenciaDelMotorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PotenciaDelMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
