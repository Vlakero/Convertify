import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionesDivisasPage } from './conversiones-divisas.page';

describe('ConversionesDivisasPage', () => {
  let component: ConversionesDivisasPage;
  let fixture: ComponentFixture<ConversionesDivisasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConversionesDivisasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
