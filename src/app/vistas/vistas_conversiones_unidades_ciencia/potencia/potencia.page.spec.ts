import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PotenciaPage } from './potencia.page';

describe('PotenciaPage', () => {
  let component: PotenciaPage;
  let fixture: ComponentFixture<PotenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PotenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
