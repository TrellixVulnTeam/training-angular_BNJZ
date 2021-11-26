import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FormatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.substr(args[0],args[1]) + "...";
    // return value.substr(0,200) + "...";
  }

}
