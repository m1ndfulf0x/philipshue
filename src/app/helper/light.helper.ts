import { LightStateInterface } from '../data/light-state.interface';

export class LightHelper
{
  public static getLightId(id:string):string
  {
    switch(id)
    {
      case 'play2':
        return '9';
      case 'play3':
        return '10';
      default:
        return '10';
    }
  }

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
