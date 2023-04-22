import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birr'
})
export class BirrPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {

    // multiply 101

    value = value as number;

    if (value) {
      return value * 101;
    }

    return null;
  }

}
