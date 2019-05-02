import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeventosPage } from './listeventos.page';

describe('ListeventosPage', () => {
  let component: ListeventosPage;
  let fixture: ComponentFixture<ListeventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeventosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
