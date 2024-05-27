import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, UiLibraryAngularModule, LetDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.store.dispatch(FoodListActions.loadFood());
    // this.store.select(selectFoodList).subscribe(foodList => this.foodList = foodList)
    // this.store.select(selectSelectedFood).subscribe(foodName => this.selectedFood = foodName)
  }

  selectedFood$ = this.store.select(selectSelectedFood);
  foodList$ = this.store.select(selectFoodList);
  selectedFoodItem$ = this.store.select(selectSelectedFoodItem);

  selectFood(name: string | string[]) {
    this.store.dispatch(FoodListActions.selectFood({ name }));
  }
}
