import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculoDeCorrienteMaximaPage } from './calculo-de-corriente-maxima.page';

describe('CalculoDeCorrienteMaximaPage', () => {
  let component: CalculoDeCorrienteMaximaPage;
  let fixture: ComponentFixture<CalculoDeCorrienteMaximaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculoDeCorrienteMaximaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
