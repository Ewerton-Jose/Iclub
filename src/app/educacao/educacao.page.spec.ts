import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducacaoPage } from './educacao.page';

describe('EducacaoPage', () => {
  let component: EducacaoPage;
  let fixture: ComponentFixture<EducacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EducacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
