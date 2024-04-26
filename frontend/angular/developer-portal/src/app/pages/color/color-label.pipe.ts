import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorlabel',
  standalone: true
})
export class ColorLabelPipe implements PipeTransform {

  transform(colorName:string): string {
    return colorName.replace('-to-be-defined',' ').replaceAll('-',' ');
  }

}
