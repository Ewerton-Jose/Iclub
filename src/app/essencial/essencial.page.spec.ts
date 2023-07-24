import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EssencialPage } from './essencial.page';

describe('EssencialPage', () => {
  let component: EssencialPage;
  let fixture: ComponentFixture<EssencialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EssencialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
