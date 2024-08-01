import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresionPage } from './presion.page';

describe('PresionPage', () => {
  let component: PresionPage;
  let fixture: ComponentFixture<PresionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
