import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaudePage } from './saude.page';

describe('SaudePage', () => {
  let component: SaudePage;
  let fixture: ComponentFixture<SaudePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
