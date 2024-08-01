import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculosFotovoltaicosPage } from './calculos-fotovoltaicos.page';

describe('CalculosFotovoltaicosPage', () => {
  let component: CalculosFotovoltaicosPage;
  let fixture: ComponentFixture<CalculosFotovoltaicosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculosFotovoltaicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
