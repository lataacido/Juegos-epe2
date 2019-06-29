import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexfirebasePage } from './conexfirebase.page';

describe('ConexfirebasePage', () => {
  let component: ConexfirebasePage;
  let fixture: ComponentFixture<ConexfirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexfirebasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexfirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
