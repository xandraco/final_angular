import { TestBed } from '@angular/core/testing';

import { GetPokemonDataService } from './get-pokemon-data.service';

describe('GetPokemonDataService', () => {
  let service: GetPokemonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokemonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
