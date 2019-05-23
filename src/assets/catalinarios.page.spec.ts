import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalinariosPage } from './catalinarios.page';

describe('CatalinariosPage', () => {
  let component: CatalinariosPage;
  let fixture: ComponentFixture<CatalinariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalinariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalinariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
