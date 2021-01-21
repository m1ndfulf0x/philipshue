import { brightnessBounderies } from './../../data/brightness';
import {
  Component,
  OnInit
} from '@angular/core';
import { LightStateInterface } from '../../data/light-state.interface';
import { HueApiService } from '../../service/hue.api-service';
import { LightHelper } from '../../helper/light.helper';

const enum Scenes {
  focus = 'focus',
  energy = 'energy',
  reading = 'reading'
};

@Component({
  selector:    'app-light-buttons',
  templateUrl: './light-buttons.component.html',
  styleUrls:   ['./light-buttons.component.scss']
})
export class LightButtonsComponent implements OnInit
{
  public play2Light:LightStateInterface = {
    on: false,
    name: 'play2',
    bri: 0
  };
  public play3Light:LightStateInterface = {
    on: false,
    name: 'play3',
    bri: 0
  };
  public readonly sliderConfig = {
    max: brightnessBounderies.maximum,
    min: brightnessBounderies.minimum,
    step: 1,
    label: 'Brightness'
  };

  constructor(private service:HueApiService)
  {
  }

  public ngOnInit():void
  {
    this.service.getLightState('9').subscribe((state:any) =>
    {
      this.play2Light = {
        on:      state.state.on,
        bri:     state.state.on ? state.state.bri : 0,
        lightId: '9'
      };
    });
    this.service.getLightState('10').subscribe((state:any) =>
    {
      this.play3Light = {
        on:      state.state.on,
        bri:     state.state.on ? state.state.bri : 0,
        lightId: '10'
      };
    });
  }

  public turnLight(light:LightStateInterface):void
  {
    if(light?.on)
    {
      this.turnOnLight(light.lightId)
      this.service.getLightState(light.lightId).subscribe((state:any) => {
        light.bri = state.state.bri;
      });
    }
    else
    {
      this.turnOffLight(light.lightId);
      light.bri = 0;
    }
  }

  public setLightForFocus(light:LightStateInterface):void
  {
    this.service.setLightState(light.lightId, LightHelper.getFocusLight()).subscribe((state:any)=>
    {
      light.on = true;
      light.bri = state[3].success['/lights/' + light.lightId + '/state/bri'];
      light.activeScene = Scenes.focus;
    });
  }

  public setLightForEnergy(light:LightStateInterface):void
  {
    this.service.setLightState(light.lightId, LightHelper.getEnergyLight()).subscribe((state:any)=>
    {
      light.on = true;
      light.bri = state[3].success['/lights/' + light.lightId + '/state/bri'];
      light.activeScene = Scenes.energy;
    });
  }

  public setLightForReading(light:LightStateInterface):void
  {
    this.service.setLightState(light.lightId, LightHelper.getReadingLight()).subscribe((state:any)=>
    {
      light.on = true;
      light.bri = state[3].success['/lights/' + light.lightId + '/state/bri'];
      light.activeScene = Scenes.reading;
    });
  }

  /**
   * setBrightness
   */
  public setBrightness(light:LightStateInterface):void {
    this.service.setBrightness(light.lightId, light.bri).subscribe(() => {
      light.on = true;
    });
  }

  private turnOnLight(id:string):void
  {
    this.service.turnOnLight(id).subscribe((value) =>
    {
      console.log(value);
    },
    (error) =>{console.log(error)});
  }

  private turnOffLight(id:string):void
  {
    this.service.turnOffLight(id).subscribe();
  }
}
