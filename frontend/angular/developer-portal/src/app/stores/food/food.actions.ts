import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Food } from '@api/api.models';

export const FoodListActions = createActionGroup({
  source: 'FoodList',
  events: {
    loadFood: emptyProps(),
    loadFoodSuccess: props<{ foods:Food[] }>(),
    selectFood: props<{ name:string }>(),
  },
});

