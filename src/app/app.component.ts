import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {


    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.registerSvgIcons();
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
