import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '@components/task-list/task';
import { foodState } from './food.reducer';



export const getFoodState = createFeatureSelector<foodState>('food');

// export const selectFoodList = createSelector(getFoodState, (state: foodState) => state.foodList ?? []);

