import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-light-control-panel',
    templateUrl: './light-control-panel.component.html',
    styleUrls: ['./light-control-panel.component.scss']
})
export class LightControlPanelComponent implements OnInit {
    public selectedLights: { play2: boolean; play3: boolean };

    constructor() {
        this.selectedLights = {
            play2: false,
            play3: false
        };
    }

    public ngOnInit(): void {}

    /**
     * selectLights
     * @param name:string
     */
    public selectLights(name: string) {
        if (name === 'play2') {
            this.selectedLights.play2 = !this.selectedLights.play2;
        }
        if (name === 'play3') {
            this.selectedLights.play3 = !this.selectedLights.play3;
        }
    }
}
