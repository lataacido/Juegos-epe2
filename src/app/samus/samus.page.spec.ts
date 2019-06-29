import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamusPage } from './samus.page';

describe('SamusPage', () => {
  let component: SamusPage;
  let fixture: ComponentFixture<SamusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
