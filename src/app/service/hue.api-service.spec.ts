import { TestBed } from '@angular/core/testing';

import { HueApiService } from './hue.api-service';

describe('HueApiService', () =>
{
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () =>
  {
    const service:HueApiService = TestBed.get(HueApiService);
    expect(service).toBeTruthy();
  });
});
