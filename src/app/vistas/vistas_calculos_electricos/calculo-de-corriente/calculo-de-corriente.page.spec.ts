import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculoDeCorrientePage } from './calculo-de-corriente.page';

describe('CalculoDeCorrientePage', () => {
  let component: CalculoDeCorrientePage;
  let fixture: ComponentFixture<CalculoDeCorrientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculoDeCorrientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
