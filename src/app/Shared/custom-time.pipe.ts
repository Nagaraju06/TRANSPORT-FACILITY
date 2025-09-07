import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTime'
})
export class CustomTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value) {
      return '';
    } else {
      const valueStr = value.toString();
      const [hours, minutes] = valueStr.split(':');
      let hour = parseInt(hours, 10);
      const minute = minutes ? parseInt(minutes, 10) : 0;
      const hoursTime = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      hour = hour ? hour : 12;
      return `${hour}:${minute.toString().padStart(2, '0')} ${hoursTime}`;
    }
  }

}
