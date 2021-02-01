import { TestBed } from '@angular/core/testing';

import { LightStateService } from './light-state.service';

describe('LightStateService', () => {
    let service: LightStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LightStateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize state of `playLight2` and playLight3`', () => {
        expect(service.play2Light).toEqual({
            on: false,
            name: 'play2',
            bri: 0
        });
        expect(service.play3Light).toEqual({
            on: false,
            name: 'play3',
            bri: 0
        });
    });
});
