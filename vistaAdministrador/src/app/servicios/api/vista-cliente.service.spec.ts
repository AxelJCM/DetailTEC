import { TestBed } from '@angular/core/testing';

import { VistaClienteService } from './vista-cliente.service';

describe('VistaClienteService', () => {
  let service: VistaClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
