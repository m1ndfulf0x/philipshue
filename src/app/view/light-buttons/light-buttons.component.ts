import { brightnessBounderies } from './../../data/brightness';
import {
  Component,
  OnInit
} from '@angular/core';
import { LightStateInterface } from '../../data/light-state.interface';
import { HueApiService } from '../../service/hue.api-service';
import { LightHelper } from '../../helper/light.helper';

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
        bri:     state.state.bri,
        lightId: '9'
      };
    });
    this.service.getLightState('10').subscribe((state:any) =>
    {
      this.play3Light = {
        on:      state.state.on,
        bri:     state.state.bri,
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

  public setLightForFocus(ligth:LightStateInterface):void
  {
    this.service.setLightState(ligth.lightId, LightHelper.getFocusLight()).subscribe();
  }

  public setLightForEnergy(ligth:LightStateInterface):void
  {
    this.service.setLightState(ligth.lightId, LightHelper.getEnergyLight()).subscribe();
  }

  public setLightForReading(ligth:LightStateInterface):void
  {
    this.service.setLightState(ligth.lightId, LightHelper.getReadingLight()).subscribe();
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
