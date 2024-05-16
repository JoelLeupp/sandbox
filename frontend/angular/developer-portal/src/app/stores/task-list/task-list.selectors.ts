import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '@components/task-list/task';
import { TaskListState, taskListFeatureKey } from './task-list.reducer';
import { appState, getAppState } from '..';


export const getTaskListState = createSelector(getAppState, (state: appState) => state.task );

export const selectTaskList = createSelector(getTaskListState, (state: TaskListState) => state.taskList ?? []);

export const selectOpenTasks = createSelector(
  selectTaskList,
  (tasks:Task[])=> tasks.filter((task) => !Boolean(task?.completed))
)

export const selectCompletedTasks = createSelector(
  selectTaskList,
  (tasks:Task[])=> tasks.filter((task) => Boolean(task?.completed))
)
