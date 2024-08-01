import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedidaYPesoCablePage } from './medida-y-peso-cable.page';

describe('MedidaYPesoCablePage', () => {
  let component: MedidaYPesoCablePage;
  let fixture: ComponentFixture<MedidaYPesoCablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedidaYPesoCablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
