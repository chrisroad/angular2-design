import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterletter'})

export class myfilterletter implements PipeTransform {
  transform(value: any[], args: string): any {
    if (!value) return value;

    return value.filter((item)=> item.startsWith(args));
  }
}
