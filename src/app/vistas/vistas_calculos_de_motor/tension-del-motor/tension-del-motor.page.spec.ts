import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TensionDelMotorPage } from './tension-del-motor.page';

describe('TensionDelMotorPage', () => {
  let component: TensionDelMotorPage;
  let fixture: ComponentFixture<TensionDelMotorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TensionDelMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
