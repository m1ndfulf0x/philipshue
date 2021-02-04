import { HttpClient } from '@angular/common/http';
import { HueApiService } from './hue.api-service';
export class MockHueApiService extends HueApiService {
    constructor(http: HttpClient) {
        super(http);
    }
}
