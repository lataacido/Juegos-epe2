import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstrosPage } from './monstros.page';

describe('MonstrosPage', () => {
  let component: MonstrosPage;
  let fixture: ComponentFixture<MonstrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
