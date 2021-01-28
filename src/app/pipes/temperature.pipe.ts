import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'temperaturePipe' })
export class TemperaturePipe implements PipeTransform {
  transform(value:number): string {
    let transformedValue:number = value / 100;
    return transformedValue.toFixed(1).toString().replace('.', ',') + '°C';
  }
}
