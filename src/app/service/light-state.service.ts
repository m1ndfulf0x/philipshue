import { LightStateInterface } from './../data/light-state.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightStateService {

  public play2Light:LightStateInterface;
  public play3Light:LightStateInterface;
  constructor() {
    this.play2Light = {
      on: false,
      name: 'play2',
      bri: 0
    };
    this.play3Light = {
      on: false,
      name: 'play3',
      bri: 0
    }
  }
}
