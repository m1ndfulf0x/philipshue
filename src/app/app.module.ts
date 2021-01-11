import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HueApiService } from './service/hue.api-service';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonContainerComponent } from './view/button-container/button-container.component';
import { LightButtonsComponent } from './view/light-buttons/light-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    LightButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [HueApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
