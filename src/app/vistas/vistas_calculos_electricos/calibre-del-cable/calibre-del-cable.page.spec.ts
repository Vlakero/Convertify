import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalibreDelCablePage } from './calibre-del-cable.page';

describe('CalibreDelCablePage', () => {
  let component: CalibreDelCablePage;
  let fixture: ComponentFixture<CalibreDelCablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalibreDelCablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
