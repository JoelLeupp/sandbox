import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class TaskListEffects {


  constructor(private actions$: Actions) {}
}
