import { TestBed } from '@angular/core/testing';

import { FormPersonService } from './form-person.service';

describe('FormPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormPersonService = TestBed.get(FormPersonService);
    expect(service).toBeTruthy();
  });
});
