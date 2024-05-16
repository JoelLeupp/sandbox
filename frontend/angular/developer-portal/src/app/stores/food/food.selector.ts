import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '@components/task-list/task';
import { foodState } from './food.reducer';
import { appState, getAppState } from '..';


export const getFoodState = createSelector(getAppState, (state: appState) => state.food );

export const selectFoodList = createSelector(getFoodState, (state: foodState) => state.foodList ?? []);

