import { TemperaturePipe } from './temperature.pipe';
import { TestBed } from '@angular/core/testing';

describe('TemperaturePipe', () => {
    let pipe: TemperaturePipe = new TemperaturePipe();
    beforeEach(() =>
        TestBed.configureTestingModule({
            declarations: [TemperaturePipe]
        })
    );

    it('should be created', () => {
        expect(pipe).toBeTruthy();
    });

    it('should transform temperature values correctly', () => {
        expect(pipe.transform(1777)).toBe('17,8 °C');
        expect(pipe.transform(2100)).toBe('21,0 °C');
        expect(pipe.transform(2001)).toBe('20,0 °C');
        expect(pipe.transform(943)).toBe('9,4 °C');
        expect(pipe.transform(0)).toBe('0,0 °C');
    });
});
