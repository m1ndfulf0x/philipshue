import { TemperaturePipe } from './pipes/temperature.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HueApiService } from './service/hue.api-service';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LightControlPanelComponent } from './view/light-control-panel/light-control-panel.component';
import { LightButtonsComponent } from './view/light-buttons/light-buttons.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, LightControlPanelComponent, LightButtonsComponent, TemperaturePipe],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatToolbarModule,
        MatButtonToggleModule
    ],
    providers: [HueApiService],
    bootstrap: [AppComponent]
})
export class AppModule {}
