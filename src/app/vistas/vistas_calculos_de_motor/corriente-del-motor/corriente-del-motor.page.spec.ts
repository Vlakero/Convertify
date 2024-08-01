import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrienteDelMotorPage } from './corriente-del-motor.page';

describe('CorrienteDelMotorPage', () => {
  let component: CorrienteDelMotorPage;
  let fixture: ComponentFixture<CorrienteDelMotorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorrienteDelMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
