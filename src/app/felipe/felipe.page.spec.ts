import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelipePage } from './felipe.page';

describe('FelipePage', () => {
  let component: FelipePage;
  let fixture: ComponentFixture<FelipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
