import { TestBed } from '@angular/core/testing';

import { RadioBrowseApiService } from './radio-browse-api.service';

describe('RadioBrowseApiService', () => {
  let service: RadioBrowseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioBrowseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
