import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-light-control-panel',
    templateUrl: './light-control-panel.component.html',
    styleUrls: ['./light-control-panel.component.scss']
})
export class LightControlPanelComponent implements OnInit {
    public selectedLights: Array<boolean> = [];

    constructor() {
        this.selectedLights.push(true, true);
    }

    public ngOnInit(): void {}

    /**
     * selectLights
     * @param name:string
     */
    public selectLights(name: string) {
        if (name === 'play2') {
            this.selectedLights[0] = !this.selectedLights[0];
        }
        if (name === 'play3') {
            this.selectedLights[1] = !this.selectedLights[1];
        }
    }
}
