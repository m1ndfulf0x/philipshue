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

    protected backgroundColor: string = `background: #000000`;

    public temperature: number = 0;
    public textColor: string = '';
    constructor(private service: HueApiService, public stateService: LightStateService) {}

    public ngOnInit(): void {
        this.textColor = '#000000';
        this.adjustBackgroundColorByDate();
        this.getTemperature();
    }

    private adjustBackgroundColorByDate(): void {
      const date: Date = new Date();
      const addToColor = date.getHours();
      this.backgroundColor = `background: #${99 - addToColor}${99 - addToColor}${99 - addToColor}`;
    }

    protected getTemperature(): void {
        this.textColor = '#ffd740';
        this.service.getTemperature('43').subscribe((res) => {
            this.temperature = res.state.temperature;
            this.textColor = '#000000';
        });
    }
}
