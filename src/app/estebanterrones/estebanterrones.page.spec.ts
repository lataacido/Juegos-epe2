import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstebanterronesPage } from './estebanterrones.page';

describe('EstebanterronesPage', () => {
  let component: EstebanterronesPage;
  let fixture: ComponentFixture<EstebanterronesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstebanterronesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstebanterronesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
