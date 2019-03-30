import { TestBed } from '@angular/core/testing';

import { InformacionUsuarioService } from './informacion-usuario.service';

describe('InformacionUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacionUsuarioService = TestBed.get(InformacionUsuarioService);
    expect(service).toBeTruthy();
  });
});
