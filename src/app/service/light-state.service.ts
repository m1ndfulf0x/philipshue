import { HueApiService } from './hue.api-service';
import { LightStateInterface } from './../data/light-state.interface';
import { Injectable } from '@angular/core';
import { LightHelper } from '../helper/light.helper';
import { Scenes } from '../data/scenes.enum';

@Injectable({
    providedIn: 'root'
})
export class LightStateService {
    public play2Light: LightStateInterface = {
        on: false,
        name: 'play2',
        bri: 0
    };
    public play3Light: LightStateInterface = {
        on: false,
        name: 'play3',
        bri: 0
    };

    constructor(private apiService: HueApiService) {
        this.apiService.getLightState('9').subscribe((state: any) => {
            this.play2Light = {
                on: state.state.on,
                bri: state.state.on ? state.state.bri : 0,
                lightId: '9',
                sat: state.state.sat,
                hue: state.state.hue,
                activeScene: state.state.on
                    ? LightHelper.getActiveScene(state.state.hue, state.state.bri, state.state.sat)
                    : ''
            };
        });
        this.apiService.getLightState('10').subscribe((state: any) => {
            this.play3Light = {
                on: state.state.on,
                bri: state.state.on ? state.state.bri : 0,
                lightId: '10',
                sat: state.state.sat,
                hue: state.state.hue,
                activeScene: state.state.on
                    ? LightHelper.getActiveScene(state.state.hue, state.state.bri, state.state.sat)
                    : ''
            };
        });
    }

    public turnLight(light: LightStateInterface): void {
        if (light?.on) {
            this.turnOnLight(light);
            this.apiService.getLightState(light.lightId).subscribe((state: any) => {
                light.bri = state.state.bri;
            });
        } else {
            this.turnOffLight(light);
            light.bri = 0;
        }
    }

    public setLightForFocus(light: LightStateInterface): void {
        this.apiService.setLightState(light.lightId, LightHelper.getFocusLight()).subscribe((state: any) => {
            light.on = true;
            light.bri = state[3].success['/lights/' + light.lightId + '/state/bri'];
            light.activeScene = Scenes.focus;
        });
    }

    public setLightForEnergy(light: LightStateInterface): void {
        this.apiService.setLightState(light.lightId, LightHelper.getEnergyLight()).subscribe((state: any) => {
            light.on = true;
            light.bri = state[3].success['/lights/' + light.lightId + '/state/bri'];
            light.activeScene = Scenes.energy;
        });
    }

    public setLightForReading(light: LightStateInterface): void {
        this.apiService.setLightState(light.lightId, LightHelper.getReadingLight()).subscribe((state: any) => {
            light.on = true;
            light.bri = state[3].success['/lights/' + light.lightId + '/state/bri'];
            light.activeScene = Scenes.reading;
        });
    }

    /**
     * setBrightness
     */
    public setBrightness(light: LightStateInterface): void {
        this.apiService.setBrightness(light.lightId, light.bri).subscribe(() => {
            light.on = true;
        });
    }

    private turnOnLight(light: LightStateInterface): void {
        this.apiService.turnOnLight(light.lightId).subscribe(
            (value) => {
                console.log(value);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    private turnOffLight(light: LightStateInterface): void {
        this.apiService.turnOffLight(light.lightId).subscribe(() => {
            light.activeScene = '';
        });
    }
}
