import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
result:string="";
  transform(value: string, num: number): string {
    for(let i=0;i<num;i++)
      this.result+=value;
    return this.result;
  }

}
