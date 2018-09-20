import { TestBed, inject } from '@angular/core/testing';

import { ApiCentrosService } from './api-centros.service';

describe('ApiCentrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCentrosService]
    });
  });

  it('should be created', inject([ApiCentrosService], (service: ApiCentrosService) => {
    expect(service).toBeTruthy();
  }));
});
