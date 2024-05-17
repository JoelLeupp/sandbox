import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '@components/task-list/task';
import { TaskListState, taskListFeatureKey } from './task-list.reducer';



export const getTaskListState = createFeatureSelector<TaskListState>('task');

export const selectTaskList = createSelector(getTaskListState, (state: TaskListState) => state.taskList ?? []);

export const selectOpenTasks = createSelector(
  selectTaskList,
  (tasks:Task[])=> tasks.filter((task) => !Boolean(task?.completed))
)

export const selectCompletedTasks = createSelector(
  selectTaskList,
  (tasks:Task[])=> tasks.filter((task) => Boolean(task?.completed))
)
