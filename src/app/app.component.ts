import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    protected backgroundColor: string = `background: #000000`;

    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.registerSvgIcons();
        this.adjustBackgroundcolorByDate();
    }

    private adjustBackgroundcolorByDate(): void {
        const date: Date = new Date();
        const addToColor = date.getHours();
        this.backgroundColor = `background: #${99 - addToColor}${99 - addToColor}${99 - addToColor}`;

    }

    private registerSvgIcons(): void {
        const svgIcons: Array<string> = [
            'energize',
            'focus',
            'iris',
            'play',
            'reading'
        ];

        svgIcons.forEach((icon: string) => {
            this.matIconRegistry.addSvgIcon(
                icon,
                this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/hue-icons/${icon}.svg`)
              );
        });
    }
}
