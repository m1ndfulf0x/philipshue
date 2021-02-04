import { LightStateService } from '../../service/light-state.service';
import { brightnessBoundaries } from '../../data/brightness';
import { Component, OnInit } from '@angular/core';
import { HueApiService } from '../../service/hue.api-service';

@Component({
    selector: 'app-light-buttons',
    templateUrl: './light-buttons.component.html',
    styleUrls: ['./light-buttons.component.scss']
})
export class LightButtonsComponent implements OnInit {
    public readonly sliderConfig = {
        max: brightnessBoundaries.maximum,
        min: brightnessBoundaries.minimum,
        step: 1
    };

    public temperature: number;
    constructor(private service: HueApiService, public stateService: LightStateService) {}

    public ngOnInit(): void {
        this.getTemperature();
    }

    public getTemperature(): void {
        this.service.getTemperature('43').subscribe((res) => {
            this.temperature = res.state.temperature;
        });
    }
}
