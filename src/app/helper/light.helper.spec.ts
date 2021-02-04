import { LightStateInterface } from './../data/light-state.interface';
import { LightHelper } from './light.helper';

describe('LightHelper', () => {
    const focusSceneLight: LightStateInterface = {
        on: true,
        bri: 254,
        hue: 39392,
        sat: 13
    };
    const energySceneLight: LightStateInterface = {
        on: true,
        bri: 254,
        hue: 41442,
        sat: 75
    };
    const readingSceneLight: LightStateInterface = {
        on: true,
        bri: 254,
        hue: 8597,
        sat: 121
    };

    it('should set its public constants', () => {
        expect(LightHelper.getFocusLight()).toEqual(focusSceneLight);
        expect(LightHelper.getEnergyLight()).toEqual(energySceneLight);
        expect(LightHelper.getReadingLight()).toEqual(readingSceneLight);
    });

    it('should `getActiveScene` return the a scene corresponding to given values', () => {
        const noSceneLight: LightStateInterface = {
            on: true,
            bri: 0,
            hue: 0,
            sat: 0
        };

        expect(LightHelper.getActiveScene(noSceneLight.hue, noSceneLight.bri, noSceneLight.sat)).toBe('');
        expect(LightHelper.getActiveScene(focusSceneLight.hue, focusSceneLight.bri, focusSceneLight.sat)).toBe('focus');
        expect(LightHelper.getActiveScene(energySceneLight.hue, energySceneLight.bri, energySceneLight.sat)).toBe(
            'energy'
        );
        expect(LightHelper.getActiveScene(readingSceneLight.hue, readingSceneLight.bri, readingSceneLight.sat)).toBe(
            'reading'
        );
    });
});
