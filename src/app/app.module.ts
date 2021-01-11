import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HueApiService } from './service/hue.api-service';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonContainerComponent } from './view/button-container/button-container.component';
import { LightButtonsComponent } from './view/light-buttons/light-buttons.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    LightButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [HueApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
