import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {

  transform(value: string, char1: string): string {
    return value.replaceAll(char1,'-');
  }

}
