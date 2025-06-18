import { TestBed } from '@angular/core/testing';

import { UtilDizionarioService } from './util-dizionario.service';

describe('UtilDizionarioService', () => {
  let service: UtilDizionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilDizionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
