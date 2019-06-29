import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederacionPage } from './federacion.page';

describe('FederacionPage', () => {
  let component: FederacionPage;
  let fixture: ComponentFixture<FederacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
