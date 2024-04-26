import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorvariable',
  standalone: true
})
export class ColorVariablePipe implements PipeTransform {

  transform(colorName:string): string {
    return `var(--six-color-${colorName})`;
  }

}
