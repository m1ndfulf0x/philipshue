import { HueApiService } from './../../service/hue.api-service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-static-info-footer',
    templateUrl: './static-info-footer.component.html',
    styleUrls: ['./static-info-footer.component.scss']
})
export class StaticInfoFooterComponent implements OnInit {
    public temperature: number;
    public textColor: string;

    constructor(private apiService: HueApiService) {}

    ngOnInit(): void {
        this.textColor = '#000000';
        this.getTemperature();
    }

    public getTemperature(): void {
        this.textColor = '#ffd740';
        this.apiService.getTemperature('43').subscribe((res) => {
            this.temperature = res.state.temperature;
            this.textColor = '#000000';
        });
    }
}
