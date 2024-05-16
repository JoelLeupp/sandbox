import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { TaskListActions } from './task-list.actions';
import { Task } from '@components/task-list/task';

const { addTask, removeTask, completeTask } = TaskListActions;

export const taskListFeatureKey = 'task';

export interface TaskListState {
  taskList: Task[];
}

export const initialTaskListState: TaskListState = {
  taskList: [
    { id: 0, label: 'Learn NgRx concept', completed: false },
    { id: 1, label: 'Learn about actions', completed: false },
    { id: 2, label: 'Learn about reducers', completed: false },
    { id: 3, label: 'Learn about selectors', completed: false },
  ],
};

function getMaxId(tasks: Task[]): number {
  return Math.max(...tasks.map((task) => task.id));
}

function _addTask(
  state: TaskListState,
  action: { label: string }
): TaskListState {
  const label = action.label;
  const nextId = getMaxId(state.taskList) + 1;
  console.log(`Add task with ID: ${nextId}`);
  const newTask: Task = { id: nextId, label: label, completed: false };
  return { ...state, taskList: [...state.taskList, newTask] };
}

function _removeTask(
  state: TaskListState,
  action: { id: number }
): TaskListState {
  const id = action.id;
  console.log(`Delete task with ID: ${id}`);
  return {
    ...state,
    taskList: state.taskList.filter((task) => task.id !== id),
  };
}

function _completeTask(
  state: TaskListState,
  action: { id: number }
): TaskListState {
  const id = action.id;
  console.log(`Complete task with ID: ${id}`);
  return {
    ...state,
    taskList: state.taskList.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    )
  };
}

export const taskReducer = createReducer(
  { ...initialTaskListState },
  on(addTask, _addTask),
  on(removeTask, _removeTask),
  on(completeTask, _completeTask)
);

// export function taskReducer(state: Task[], action: Action) {
//   return _taskReducer(state, action);
// }
