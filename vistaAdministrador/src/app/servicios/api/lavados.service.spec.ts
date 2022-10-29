import { TestBed } from '@angular/core/testing';

import { LavadosService } from './lavados.service';

describe('LavadosService', () => {
  let service: LavadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LavadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
