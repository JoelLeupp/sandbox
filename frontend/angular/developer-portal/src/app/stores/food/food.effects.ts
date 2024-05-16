import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { APIBaseService } from '@api/api.service';
import { FoodListActions } from './food.actions';
import { Food } from '@api/api.models';

@Injectable()
export class FoodDataEffect {
  constructor(private actions$: Actions, private api: APIBaseService) {}

  public loadFoodList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FoodListActions.loadFood.type),
      exhaustMap(() => {
        return this.api.loadFood().pipe(
          map((foodList) => FoodListActions.loadFoodSuccess({ foodList })),
          catchError((error: { message: string }) => {
            return of(FoodListActions.loadFoodError({ error: error.message }));
          })
        );
      })
    )
  );
}
