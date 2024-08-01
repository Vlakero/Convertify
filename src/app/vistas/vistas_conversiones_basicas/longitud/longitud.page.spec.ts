import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LongitudPage } from './longitud.page';

describe('LongitudPage', () => {
  let component: LongitudPage;
  let fixture: ComponentFixture<LongitudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LongitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
