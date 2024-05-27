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
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, UiLibraryAngularModule, LetDirective, AgGridAngular],
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

  colDef: ColDef<Food>[] = [
    { headerName: 'Dessert (100g serving)', field: 'name' },
    { field: 'calories',headerName: 'Calories' },
    { field: 'fat' , headerName: 'Fat (g)' },
    { field: 'carbs', headerName: 'Carbs (g)' },
    { field: 'protein', headerName: 'Protein (g)' },
    { field: 'sodium' ,headerName: 'Sodium (mg)'},
    { field: 'calcium' ,headerName: 'Calcium (%)'},
    { field: 'iron' ,headerName: 'Iron (%)'},
  ];

}
