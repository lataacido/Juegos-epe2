import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosPage } from './titulos.page';

describe('TitulosPage', () => {
  let component: TitulosPage;
  let fixture: ComponentFixture<TitulosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
