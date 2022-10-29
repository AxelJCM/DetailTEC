import { TestBed } from '@angular/core/testing';

import { CitasClientesService } from './citas-clientes.service';

describe('CitasClientesService', () => {
  let service: CitasClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
