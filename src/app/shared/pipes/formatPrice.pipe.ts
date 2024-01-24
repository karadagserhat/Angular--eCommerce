import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  }
}
