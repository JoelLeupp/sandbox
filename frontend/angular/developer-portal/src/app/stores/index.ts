import { TaskListState, taskReducer } from './task-list/task-list.reducer';
import { foodFeature, foodState } from './food/food.reducer';
import { ActionReducerMap, combineReducers, createFeatureSelector, provideStore } from '@ngrx/store';

export interface appState {
  task: TaskListState,
  [foodFeature.name]: foodState
}

export const STORE_PROVIDERS = provideStore({
  task: taskReducer,
  [foodFeature.name]: foodFeature.reducer
})



