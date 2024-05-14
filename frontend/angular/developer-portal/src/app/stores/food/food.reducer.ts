import { createFeature, createReducer, on } from '@ngrx/store';
import { Food } from './food.model';
import { FoodListActions } from './food.actions';

interface State {
  foods: Food[];
  selectedFood: Food | undefined;
  loading: boolean;
}

const initialState: State = {
  foods: [],
  selectedFood: undefined,
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
    on(FoodListActions.loadFoodSuccess, (state, { foods }) => ({
      ...state,
      foods,
      loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectFoodState, // feature selector
  selectFoods, // selector for `books` property
  selectSelectedFood,
  selectLoading, // selector for `loading` property
} = foodFeature;
