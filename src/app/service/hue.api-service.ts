import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LightStateInterface } from '../data/light-state.interface';
import { ApiConfig } from './api-config';

@Injectable({
    providedIn: 'root'
})
export class HueApiService {
    private readonly bridgeIP: string = ApiConfig.bridgeIp;
    private readonly user: string = ApiConfig.user;
    private readonly url: string = 'https://' + this.bridgeIP + '/api/' + this.user;

    constructor(private http: HttpClient) {}

    public turnOffLight(lightId: string): Observable<any> {
        return this.http.put<any>(this.url + '/lights/' + lightId + '/state', {
            on: false
        });
    }

    public turnOnLight(lightId: string): Observable<any> {
        return this.http.put<any>(this.url + '/lights/' + lightId + '/state', {
            on: true
        });
    }

    public setLightState(lightId: string, state: LightStateInterface): Observable<any> {
        return this.http.put<any>(this.url + '/lights/' + lightId + '/state', state);
    }

    public getLightState(lightId: string): Observable<any> {
        return this.http.get<any>(this.url + '/lights/' + lightId);
    }

    /**
     * setBrightness
     *
     */
    public setBrightness(lightId: string, brightness: number): Observable<any> {
        const lightState: LightStateInterface = {
            on: true,
            bri: brightness
        };
        return this.setLightState(lightId, lightState);
    }

    public getTemperature(sensorId: string): Observable<any> {
        return this.http.get<any>(this.url + '/sensors/' + sensorId);
    }
}
