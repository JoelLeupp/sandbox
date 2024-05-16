import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Food } from '@api/api.models';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/stores';
import { FoodListActions } from 'src/app/stores/food/food.actions';
import { selectFoodList } from 'src/app/stores/food/food.selector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  foodList:Food[] = []
  constructor(private store: Store<appState>) {
  }

  ngOnInit(){
    this.store.dispatch(FoodListActions.loadFood())
    this.store.select(selectFoodList).subscribe(foodList => this.foodList = foodList)
  }
}
