import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Food } from '@api/api.models';
import { FoodListActions } from './food.actions';

export interface foodState {
  foodList: Food[];
  selectedFood: string | string[] | null;
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
    })),
    on(FoodListActions.selectFood, (state, { name }) => ({
      ...state,
      selectedFood:name,
      loading: false,
    }))
  ),
  extraSelectors: ({selectFoodList,selectSelectedFood}) => ({
    selectSelectedFoodItem: createSelector(
      selectFoodList,
      selectSelectedFood,
      (foodList, selectedFood) => foodList.filter(food=>food.name === selectedFood)[0],
    )
  }),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectFoodState, // feature selector
  selectFoodList, // selector for `books` property
  selectSelectedFood,
  selectLoading, // selector for `loading` property,
  selectSelectedFoodItem
} = foodFeature;
