import { TaskListState, taskReducer } from './task-list/task-list.reducer';
import { foodFeature, foodState } from './food/food.reducer';
import { ActionReducerMap, combineReducers, createFeatureSelector } from '@ngrx/store';

export interface appState {
  task: TaskListState,
  [foodFeature.name]: foodState
}

export const appReducers = combineReducers<appState>({
  task: taskReducer,
  [foodFeature.name]: foodFeature.reducer
})

export const getAppState = createFeatureSelector<appState>('root');


