import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroidPage } from './metroid.page';

describe('MetroidPage', () => {
  let component: MetroidPage;
  let fixture: ComponentFixture<MetroidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
