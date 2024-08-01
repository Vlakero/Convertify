import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngulosPage } from './angulos.page';

describe('AngulosPage', () => {
  let component: AngulosPage;
  let fixture: ComponentFixture<AngulosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AngulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
