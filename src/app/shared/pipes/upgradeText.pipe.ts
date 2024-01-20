import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'upgradeText',
})
export class UpgradeTextPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    value = value.replaceAll('Please', '').replaceAll(',', ' and ');
    return value;
  }
}
