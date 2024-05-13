import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '@components/task-list/task';


export interface AppState {
  taskList:Task[];
}

export const selectTaskList = (state: AppState) => state.taskList ?? [];

export const selectOpenTasks = createSelector(
  selectTaskList,
  (tasks:Task[])=> tasks.filter((task) => !Boolean(task?.completed))
)

export const selectCompletedTasks = createSelector(
  selectTaskList,
  (tasks:Task[])=> tasks.filter((task) => Boolean(task?.completed))
)
