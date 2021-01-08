import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HueApiService } from './hue.api-service';

describe('HueApiService', () =>
{
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () =>
  {
    const service:HueApiService = TestBed.inject(HueApiService);
    expect(service).toBeTruthy();
  });
});
