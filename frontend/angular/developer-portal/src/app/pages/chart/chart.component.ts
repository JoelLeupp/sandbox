import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Food } from '@api/api.models';
import { Store } from '@ngrx/store';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { appState } from 'src/app/stores';
import { FoodListActions } from 'src/app/stores/food/food.actions';
import {
  selectFoodList,
  selectSelectedFood,
  selectSelectedFoodItem,
} from 'src/app/stores/food/food.reducer';
import { LetDirective } from '@ngrx/component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, UiLibraryAngularModule, LetDirective, PlotlyModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.store.dispatch(FoodListActions.loadFood());
    // this.store.select(selectFoodList).subscribe(foodList => this.foodList = foodList)
    // this.store.select(selectSelectedFood).subscribe(foodName => this.selectedFood = foodName)
    this.store
      .select(selectSelectedFoodItem)
      .subscribe((foodInfo) => this.foodInfo.set(foodInfo));
  }

  selectedFood$ = this.store.select(selectSelectedFood);
  foodList$ = this.store.select(selectFoodList);
  selectedFoodItem$ = this.store.select(selectSelectedFoodItem);

  selectFood(name: string | string[]) {
    this.store.dispatch(FoodListActions.selectFood({ name }));
  }

  foodInfo = signal<Food | null>(null);

  graphLayout = computed(() => {
    return {
      autosize: true,
      ...(this.foodInfo() && {
        title: {
          text: `<b>${
            this.foodInfo()?.name
          }</b><br><span style="font-size:.85em">Calories: ${
            this.foodInfo()?.calories
          }</span>`,
          font: {
            size: 18,
          },
          yref: 'container',
          xanchor: 'left',
          yanchor: 'top',
          x: 0,
          y: 0.9,
        },
      }),
      xaxis: {
        tickwidth: 1,
      },
      yaxis: {
        showgrid: true,
        zerolinewidth: 2,
        ticksuffix: '  ',
      },
    };
  });

  graphData = computed(() => {
    return [
      {
        name: 'Nutrition',
        x: ['Fat', 'Carbs', 'Protein'],
        y: [
          this.foodInfo()?.fat,
          this.foodInfo()?.carbs,
          this.foodInfo()?.protein,
        ],
        type: 'bar',
        marker: {
          color: '#373a36',
        },
        hovertemplate: '%{label}: %{value:.1f}g',
        cliponaxis: false,
      },
    ];
  });

  graph = computed(() => {
    return {
      data: this.graphData(),
      layout: this.graphLayout(),
      config: {
        displayModeBar: false,
      },
      style: { position: 'relative', width: '100%', height: '100%' },
    };
  });
}
