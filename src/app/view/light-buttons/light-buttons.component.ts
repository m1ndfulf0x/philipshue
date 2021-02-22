import { LightStateService } from '../../service/light-state.service';
import { brightnessBoundaries } from '../../data/brightness';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-light-buttons',
    templateUrl: './light-buttons.component.html',
    styleUrls: ['./light-buttons.component.scss']
})
export class LightButtonsComponent implements OnInit {
    @Input()
    public selectedLights: 'play2' | 'play3' | 'both' | 'none';

    public readonly sliderConfig = {
        max: brightnessBoundaries.maximum,
        min: brightnessBoundaries.minimum,
        step: 1
    };

    constructor(public stateService: LightStateService) {}

    public ngOnInit(): void {}
}
