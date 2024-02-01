import { TestBed } from '@angular/core/testing';

import { PlayTrackService } from './play-track.service';

describe('PlayTrackService', () => {
  let service: PlayTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
