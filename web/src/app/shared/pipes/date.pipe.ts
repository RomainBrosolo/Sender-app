import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const dateObject = new Date(value);

    const day = dateObject.getUTCDate().toString().padStart(2, '0');
    const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getUTCFullYear().toString().substr(2, 2);

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }
}