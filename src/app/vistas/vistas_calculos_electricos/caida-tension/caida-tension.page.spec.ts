import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaidaTensionPage } from './caida-tension.page';

describe('CaidaTensionPage', () => {
  let component: CaidaTensionPage;
  let fixture: ComponentFixture<CaidaTensionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaidaTensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
