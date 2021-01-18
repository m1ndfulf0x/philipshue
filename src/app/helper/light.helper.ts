import { LightStateInterface } from '../data/light-state.interface';

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
}
