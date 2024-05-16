import { createFeature, createReducer, on } from '@ngrx/store';
import { Food } from '@api/api.models';
import { FoodListActions } from './food.actions';

export interface foodState {
  foodList: Food[];
  selectedFood: Food | null;
  loading: boolean;
}

const initialState: foodState = {
  foodList: [],
  selectedFood: null,
  loading: false,
};

export const foodFeature = createFeature({
  name: 'food',
  reducer: createReducer(
    initialState,
    on(FoodListActions.loadFood, (state) => ({
      ...state,
      loading: true,
    })),
    on(FoodListActions.loadFoodSuccess, (state, { foodList }) => ({
      ...state,
      foodList,
      loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectFoodState, // feature selector
  selectFoodList, // selector for `books` property
  selectSelectedFood,
  selectLoading, // selector for `loading` property
} = foodFeature;
