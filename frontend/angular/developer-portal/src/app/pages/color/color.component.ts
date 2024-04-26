import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { ColorLabelPipe } from './color-label.pipe';
import { ColorVariablePipe } from './color-variable.pipe';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule,UiLibraryAngularModule,ColorLabelPipe,ColorVariablePipe],
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss',
})
export class ColorComponent {


  toColorVariable = function(colorName:string){
    return `var(--six-color-${colorName})`
  }

  cleanColorName = function(colorName:string){
    return colorName.replace('-to-be-defined',' ').replaceAll('-',' ')
  }

  sixColors: [string, [string, string][]][]= [
    [
      'Base Colors',
      [
        ['red', '#de3919'],
        ['black', '#000'],
        ['white', '#fff'],
        ['indigo', '#5c1bb8']
      ]
    ],
    [
      'Background Colors',
      [
        ['web-rock-900', '#262626'],
        ['web-rock-800', '#484848'],
        ['web-rock-700', '#676767'],
        ['web-rock-600', '#7b7b7b'],
        ['web-rock-500', '#a5a5a5'],
        ['web-rock-400', '#c3c3c3'],
        ['web-rock-300', '#e5e5e5'],
        ['web-rock-200', '#f1f1f1'],
        ['web-rock-100', '#f6f6f6'],
        ['web-rock-50', '#fbfbfb'],
        ['clay-200', '#ada398'],
        ['clay-50', '#ebe8e7']
      ]
    ],
    [
      'Signal Colors',
      [
        ['danger-900', '#c52c0f'],
        ['danger-800', '#de3919'],
        ['danger-light-to-be-defined', '#f58c78'],
        ['warning-800', '#ef9f25'],
        ['warning-700', '#f2b72c'],
        ['warning-light-to-be-defined', '#f9deb4'],
        ['success-600', '#58d200'],
        ['success-500', '#6ae300'],
        ['success-light-to-be-defined', '#aaff6c'],
        ['action-600', '#1f87e5'],
        ['action-500', '#2196f3'],
        ['action-light-to-be-defined', '#a8d0f5'],
        ['inactiv', '#c3c3c3']
      ]
    ]
  ];
}
