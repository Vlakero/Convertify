import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VelocidadPage } from './velocidad.page';

describe('VelocidadPage', () => {
  let component: VelocidadPage;
  let fixture: ComponentFixture<VelocidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VelocidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
