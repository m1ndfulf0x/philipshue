import { TemperaturePipe } from './pipes/temperature.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HueApiService } from './service/hue.api-service';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { ButtonContainerComponent } from './view/button-container/button-container.component';
import { LightButtonsComponent } from './view/light-buttons/light-buttons.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [AppComponent, ButtonContainerComponent, LightButtonsComponent, TemperaturePipe],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatIconModule
    ],
    providers: [HueApiService],
    bootstrap: [AppComponent]
})
export class AppModule {}
