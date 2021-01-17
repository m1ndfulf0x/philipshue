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
  public lightStates:Array<LightStateInterface> = [{on:false, bri: 0},{on:false, bri: 0}];
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
      this.lightStates[0] = {
        on:      state.state.on,
        bri:     state.state.bri,
        lightId: '9'
      };
    });
    this.service.getLightState('10').subscribe((state:any) =>
    {
      this.lightStates[1] = {
        on:      state.state.on,
        bri:     state.state.bri,
        lightId: '10'
      };
    });
  }

  public turnLight(light:LightStateInterface):void
  {
    if(light)
    {
      light.on ? this.turnOnLight(light.lightId) : this.turnOffLight(light.lightId);
    }
  }

  public setLightForFocus(id:string):void
  {
    this.service.setLightState(LightHelper.getLightIdByName(id), LightHelper.getFocusLight()).subscribe();
  }

  public setLightForEnergy(id:string):void
  {
    this.service.setLightState(LightHelper.getLightIdByName(id), LightHelper.getEnergyLight()).subscribe();
  }

  public setLightForReading(id:string):void
  {
    this.service.setLightState(LightHelper.getLightIdByName(id), LightHelper.getReadingLight()).subscribe();
  }

  /**
   * setBrightness
   */
  public setBrightness(id:string):void {
    const lightId:string = LightHelper.getLightIdByName(id);
    const lightState:LightStateInterface = this.lightStates.find((state) => {
      return state.lightId === lightId;
    });

    this.service.setBrightness(lightId, lightState.bri);
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
