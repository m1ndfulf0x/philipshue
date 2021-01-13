import {
  Component,
  OnInit
} from '@angular/core';
import { LightStateInterface } from '../../data/light-state.interface';
import { HueApiService } from '../../service/hue.api-service';
import { LightHelper } from '../../helper/light.helper';

@Component({
  selector:    'light-buttons',
  templateUrl: './light-buttons.component.html',
  styleUrls:   ['./light-buttons.component.scss']
})
export class LightButtonsComponent implements OnInit
{
  public lightStates:Array<LightStateInterface> = [];
  public isChecked:boolean = false;

  constructor(private service:HueApiService)
  {
  }

  public ngOnInit():void
  {
    this.service.getLightState('9').subscribe((state:any) =>
    {
      this.lightStates.push({
        on:      state.state.on,
        lightId: '9'
      });
    });
    this.service.getLightState('10').subscribe((state:any) =>
    {
      this.lightStates.push({
        on:      state.state.on,
        lightId: '10'
      });
    });
  }

  public turnLight(light:LightStateInterface):void
  {
    // light.on = !light.on;
    if(light)
    {
      light.on ? this.turnOffLight(light.lightId) : this.turnOnLight(light.lightId);
    }
  }

  private turnOnLight(id:string):void
  {
    this.service.turnOnLight(id).subscribe();
  }

  private turnOffLight(id:string):void
  {
    this.service.turnOffLight(id).subscribe();
  }

  public setLightForFocus(id:string):void
  {
    this.service.setLightState(LightHelper.getLightId(id), LightHelper.getFocusLight()).subscribe();
  }

  public setLightForEnergy(id:string):void
  {
    this.service.setLightState(LightHelper.getLightId(id), LightHelper.getEnergyLight()).subscribe();
  }

  public setLightForReading(id:string):void
  {
    this.service.setLightState(LightHelper.getLightId(id), LightHelper.getReadingLight()).subscribe();
  }
}
