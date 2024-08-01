import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolumenPage } from './volumen.page';

describe('VolumenPage', () => {
  let component: VolumenPage;
  let fixture: ComponentFixture<VolumenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolumenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
