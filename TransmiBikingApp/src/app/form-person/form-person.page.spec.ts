import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonPage } from './form-person.page';

describe('FormPersonPage', () => {
  let component: FormPersonPage;
  let fixture: ComponentFixture<FormPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
