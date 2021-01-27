import { LightButtonsComponent } from './../view/light-buttons/light-buttons.component';
import { LightStateInterface } from '../data/light-state.interface';
import { Scenes } from '../data/scenes.enum';

export class LightHelper
{
  public static getFocusLight():LightStateInterface
  {
    return {
      on:  true,
      bri: 254,
      hue: 39392,
      sat: 13
    };
  }

  public static getEnergyLight():LightStateInterface
  {
    return {
      on: true,
      bri: 254,
      hue: 41442,
      sat: 75
    }
  }

  public static getReadingLight():LightStateInterface
  {
    return {
      on: true,
      bri: 254,
      hue: 8597,
      sat: 121
    }
  }

  public static getActiveScene(hue:number, bri:number, sat:number):string {
    const focusScene:LightStateInterface = this.getFocusLight();
    const energyScene:LightStateInterface = this.getEnergyLight();
    const readingScene:LightStateInterface = this.getReadingLight();
    if(bri === focusScene.bri && hue === focusScene.hue && sat === focusScene.sat) {
      return Scenes.focus;
    }
    if (bri === energyScene.bri && hue === energyScene.hue && sat === energyScene.sat) {
      return Scenes.energy;
    }
    if (bri === readingScene.bri && hue === readingScene.hue && sat === readingScene.sat) {
      return Scenes.reading;
    }
    return '';
  }
}
