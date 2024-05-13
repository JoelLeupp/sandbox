import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TaskListActions = createActionGroup({
  source: 'TaskList',
  events: {
    addTask: props<{ label: string }>(),
    removeTask: props<{ id: number }>(),
    completeTask: props<{ id: number }>(),
  },
});


